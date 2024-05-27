import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linking } from 'react-native';

import { ActionList } from '@/components/ActionList';
import { LimitedWidthContainer } from '@/components/LimitedWidthContainer';
import { ScrollView } from '@/components/ScrollView';
import { Text } from '@/components/Text';
import { initializeAppSettings } from '@/functions/initializeAppSettings';
import { storageKeys } from '@/helpers/storageKeys';
import { colors, spaces } from '@/helpers/themes';
import { useAlertModal } from '@/stores/useAlertModal';
import { useUserData } from '@/stores/useUserData';

export function SettingsPage() {
	const { t } = useTranslation();
	const { key, cleanUserData } = useUserData();
	const { showAlert } = useAlertModal();
	const navigation = useNavigation();

	const { currency, enableLocalAuth, language, publicKey } = storageKeys;

	async function onExit() {
		await AsyncStorage.multiRemove([currency, enableLocalAuth, language]);
		await SecureStore.deleteItemAsync(publicKey);
		initializeAppSettings();
		cleanUserData();

		navigation.reset({
			index: 0,
			routes: [{ name: 'LocalAuthPage' }],
		});
	}

	const firstList = [
		{
			testID: 'idCopy',
			title: t('copy-my-address'),
			onAction: async () => await Clipboard.setStringAsync(key),
		},
	];

	const secondList = [
		{
			testID: 'idLanguage',
			title: t('language'),
			onAction: () => navigation.navigate('LanguagePage'),
			arrowVisible: true,
		},
		{
			testID: 'idCurrency',
			title: t('currency'),
			onAction: () => navigation.navigate('CurrencyPage'),
			arrowVisible: true,
		},
		{
			testID: 'idTerms',
			title: t('terms'),
			onAction: () => navigation.navigate('TermsPage'),
			arrowVisible: true,
		},
		{
			testID: 'idSourceCode',
			title: t('source-code'),
			onAction: () => Linking.openURL('https://github.com/cyberkaidev/wallet-you'),
			arrowVisible: true,
		},
		{
			testID: 'idExit',
			title: t('exit'),
			onAction: () => {
				showAlert({ title: t('do-you-really-want-to-leave'), onConfirm: () => onExit() });
			},
			arrowVisible: true,
		},
	];

	return (
		<ScrollView>
			<LimitedWidthContainer>
				<ActionList list={firstList} />
				<Text
					size="xs"
					color={colors.light_grey}
					marginT={spaces.space_5}
					marginL={spaces.space_15}
					marginB={spaces.space_25}
				>
					{key}
				</Text>
				<ActionList list={secondList} />
				<Text marginT={spaces.space_15}>
					v {Constants.expoConfig?.version != null ? Constants.expoConfig.version : '-'}
				</Text>
			</LimitedWidthContainer>
		</ScrollView>
	);
}
