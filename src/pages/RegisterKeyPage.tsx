import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { ButtonTitleGhost } from '@/components/ButtonTitleGhost';
import { CheckBoxMessage } from '@/components/CheckBoxMessage';
import { ScrollView } from '@/components/ScrollView';
import { Text } from '@/components/Text';
import { storageKeys } from '@/helpers/storageKeys';
import { colors, spaces, width } from '@/helpers/themes';
import { TextFieldPaste } from '@/pages/fragments/TextFieldPaste';
import { getBitcoinBalance } from '@/services/getBitcoinBalance';
import { useBitcoinDataPrices } from '@/stores/useBitcoinDataPrices';
import { useUserData } from '@/stores/useUserData';

export function RegisterKeyPage() {
	const { t } = useTranslation();
	const { fetchTransactions, setKey } = useUserData();
	const { fetchBitcoinDataPrices } = useBitcoinDataPrices();
	const navigation = useNavigation();

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

		navigation.reset({
			index: 0,
			routes: [{ name: 'HomePage' }],
		});
	}

	return (
		<ScrollView>
			<TextFieldPaste value={inputPublicKey} onChangeText={setInputPublicKey} />
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
			<ButtonTitleGhost
				title={t('continue')}
				onPress={handlerContinue}
				size="large"
				loading={loading}
				disabled={inputPublicKey.length < 1}
				marginT={spaces.space_15}
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	textErrorContainer: {
		width: '100%',
		maxWidth: width.max_width,
		alignSelf: 'center',
	},
});
