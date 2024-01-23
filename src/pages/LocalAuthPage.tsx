import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { ButtonTitleShape } from '@/components/ButtonTitleShape';
import { storageKeys } from '@/helpers/storageKeys';
import { colors } from '@/helpers/themes';
import { getBitcoinBalance } from '@/services/getBitcoinBalance';
import { useBitcoinDataPrices } from '@/stores/useBitcoinDataPrices';
import { useUserData } from '@/stores/useUserData';
import { RootStackParamListProps } from '@/types/RoutesType';

export function LocalAuthPage() {
	const navigation = useNavigation();
	const { fetchTransactions, setKey } = useUserData(state => state);
	const { fetchBitcoinDataPrices } = useBitcoinDataPrices(state => state);
	const { t } = useTranslation();

	const [loading, setLoading] = React.useState(false);

	async function resetRoute(navigate: keyof RootStackParamListProps) {
		if (navigate === 'HomePage') {
			const publicKey = await SecureStore.getItemAsync(storageKeys.publicKey);
			const resBalance = await getBitcoinBalance(publicKey as string);
			if (resBalance === 'not-found') {
				navigation.reset({
					index: 0,
					routes: [{ name: 'RegisterKeyPage' }],
				});
				return;
			}
			fetchBitcoinDataPrices();
			fetchTransactions(publicKey as string);
		}
		navigation.reset({
			index: 0,
			routes: [{ name: navigate }],
		});
	}

	async function authenticate() {
		setLoading(true);

		const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
		const userEnabledAuth = await AsyncStorage.getItem(storageKeys.enableLocalAuth);

		if (!isBiometricEnrolled || !userEnabledAuth || userEnabledAuth === 'off') {
			resetRoute('HomePage');
		} else {
			const results = await LocalAuthentication.authenticateAsync();
			if (results.success) resetRoute('HomePage');
			if (!results.success) setLoading(false);
		}
	}

	async function publicKeyCheck() {
		const publicKey = await SecureStore.getItemAsync(storageKeys.publicKey);
		if (!publicKey) {
			resetRoute('RegisterKeyPage');
		} else {
			setKey(publicKey);
			authenticate();
		}
	}

	React.useEffect(() => {
		publicKeyCheck();
	}, []);

	return (
		<View style={styles.container}>
			<ButtonTitleShape title={t('unlock')} onPress={authenticate} loading={loading} size="small" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black_100,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
