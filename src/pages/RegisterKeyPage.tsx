import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, NavigationProp, useNavigation } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { ButtonTitleGhost } from '@/components/ButtonTitleGhost';
import { CheckBoxMessage } from '@/components/CheckBoxMessage';
import { ScrollViewHeader } from '@/components/ScrollViewHeader';
import { Text } from '@/components/Text';
import { TextFieldArea } from '@/components/TextFieldArea';
import { storageKeys } from '@/helpers/storageKeys';
import { colors, spaces, width } from '@/helpers/themes';
import { RootStackParamListProps } from '@/routes/types';
import { getBitcoinBalance } from '@/services';
import { useBitcoinDataPrices, useUserData } from '@/stores';

export function RegisterKeyPage() {
	const { t } = useTranslation();
	const { fetchTransactions, setKey } = useUserData(state => state);
	const { fetchBitcoinDataPrices } = useBitcoinDataPrices(state => state);
	const navigation = useNavigation<NavigationProp<RootStackParamListProps>>();

	const [showBiometricOption, setShowBiometricOption] = React.useState(false);
	const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [inputPublicKey, setInputPublicKey] = React.useState('');
	const [error, setError] = React.useState({ message: '', visible: false });

	React.useLayoutEffect(() => {
		(async () => {
			const compatible = await LocalAuthentication.hasHardwareAsync();
			const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
			setShowBiometricOption(compatible && isBiometricEnrolled);
		})();
	}, []);

	async function handlerContinue() {
		setLoading(true);
		if (error.visible) setError({ message: '', visible: false });
		const resBalance = await getBitcoinBalance(inputPublicKey);

		if (resBalance === 'not-found') {
			setError({ message: t('public-key-not-found'), visible: true });
			setLoading(false);
			return;
		}

		if (resBalance === 'error-get-balance-bitcoin') {
			setError({ message: t('request-error-try-later'), visible: true });
			setLoading(false);
			return;
		}
		fetchTransactions(inputPublicKey);
		fetchBitcoinDataPrices();
		if (toggleCheckBox) await AsyncStorage.setItem(storageKeys.enableLocalAuth, 'on');
		await SecureStore.setItemAsync(storageKeys.publicKey, inputPublicKey);
		setKey(inputPublicKey);
		navigation.dispatch(
			CommonActions.reset({
				index: 1,
				routes: [{ name: 'TabsRoutes' }],
			}),
		);
	}

	return (
		<ScrollViewHeader headerTitle={t('public-key')}>
			<TextFieldArea value={inputPublicKey} onChangeText={setInputPublicKey} />
			{error.visible && (
				<View style={styles.textErrorContainer}>
					<Text weight="medium" marginT={spaces.space_5} color={colors.red}>
						{error.message}
					</Text>
				</View>
			)}
			{showBiometricOption && (
				<CheckBoxMessage
					isActivated={toggleCheckBox}
					onAction={() => setToggleCheckBox(!toggleCheckBox)}
					message={t('use-biometrics-optional')}
				/>
			)}
			<View style={styles.space} />
			<ButtonTitleGhost
				title={t('continue')}
				onPress={handlerContinue}
				size="large"
				loading={loading}
				disabled={inputPublicKey.length < 1}
				marginT={spaces.space_25}
			/>
		</ScrollViewHeader>
	);
}

const styles = StyleSheet.create({
	textErrorContainer: {
		width: '100%',
		maxWidth: width.max_width,
		alignSelf: 'center',
	},
	space: {
		flex: 1,
	},
});
