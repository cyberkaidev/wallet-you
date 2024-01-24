import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as Clipboard from 'expo-clipboard';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linking } from 'react-native';

import { ActionList } from '@/components/ActionList';
import { AlertModal } from '@/components/AlertModal';
import { LimitedWidthContainer } from '@/components/LimitedWidthContainer';
import { ScrollView } from '@/components/ScrollView';
import { Text } from '@/components/Text';
import { initializeAppSettings } from '@/functions/initializeAppSettings';
import { storageKeys } from '@/helpers/storageKeys';
import { colors, spaces } from '@/helpers/themes';
import { useUserData } from '@/stores/useUserData';

export function SettingsPage() {
	const { t } = useTranslation();

	const { key, cleanUserData } = useUserData();
	const [showModal, setShowModal] = React.useState(false);
	const { currency, enableLocalAuth, language, publicKey } = storageKeys;
	const navigation = useNavigation();

	async function onExit() {
		await AsyncStorage.multiRemove([currency, enableLocalAuth, language]);
		await SecureStore.deleteItemAsync(publicKey);
		setShowModal(false);
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
			title: t('copy-my-public-key'),
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
	];

	const thirdList = [{ testID: 'idExit', title: t('exit'), onAction: () => setShowModal(true) }];

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
				<ActionList list={secondList} marginB={spaces.space_25} />
				<ActionList list={thirdList} />
				<Text marginT={spaces.space_15}>
					v {Constants.expoConfig?.version != null ? Constants.expoConfig.version : '-'}
				</Text>
			</LimitedWidthContainer>
			<AlertModal
				title={t('do_you_really_want_to_leave')}
				visible={showModal}
				onCancel={() => setShowModal(false)}
				onConfirm={onExit}
			/>
		</ScrollView>
	);
}
