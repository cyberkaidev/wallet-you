import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, NavigationProp, useNavigation } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonTitleShape } from '@/components';
import { storageKeys } from '@/helpers';
import { RootStackParamListProps } from '@/routes/types';
import { getBitcoinBalance } from '@/services';
import { useBitcoinDataPrices, useUserData } from '@/stores';

import { LocalAuthPageContainer } from './styles';

export function LocalAuthPage() {
	const navigation = useNavigation<NavigationProp<RootStackParamListProps>>();
	const { fetchTransactions, setKey } = useUserData(state => state);
	const { fetchBitcoinDataPrices } = useBitcoinDataPrices(state => state);
	const { t } = useTranslation();

	const [loading, setLoading] = React.useState(false);

	async function resetRoute(navigate: string) {
		if (navigate === 'TabsRoutes') {
			const publicKey = await SecureStore.getItemAsync(storageKeys.publicKey);
			const resBalance = await getBitcoinBalance(publicKey as string);
			if (resBalance === 'not-found') {
				navigation.dispatch(
					CommonActions.reset({
						index: 1,
						routes: [{ name: 'RegisterKeyPage' }],
					}),
				);
				return;
			}
			fetchBitcoinDataPrices();
			fetchTransactions(publicKey as string);
		}
		navigation.dispatch(
			CommonActions.reset({
				index: 1,
				routes: [{ name: navigate }],
			}),
		);
	}

	async function authenticate() {
		setLoading(true);

		const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
		const userEnabledAuth = await AsyncStorage.getItem(storageKeys.enableLocalAuth);

		if (!isBiometricEnrolled || !userEnabledAuth || userEnabledAuth === 'off') {
			resetRoute('TabsRoutes');
		} else {
			const results = await LocalAuthentication.authenticateAsync();
			if (results.success) resetRoute('TabsRoutes');
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
		<LocalAuthPageContainer>
			<ButtonTitleShape title={t('unlock')} onPress={authenticate} loading={loading} size="small" />
		</LocalAuthPageContainer>
	);
}
