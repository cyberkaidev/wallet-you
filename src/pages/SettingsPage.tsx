import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, NavigationProp, useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ActionList } from '@/components/ActionList';
import { AlertModal } from '@/components/AlertModal';
import { LimitedWidthContainer } from '@/components/LimitedWidthContainer';
import { ScrollViewHeader } from '@/components/ScrollViewHeader';
import { Text } from '@/components/Text';
import { initializeAppSettings } from '@/functions/initializeAppSettings';
import { storageKeys } from '@/helpers/storageKeys';
import { spaces } from '@/helpers/themes';
import { useUserData } from '@/stores/useUserData';
import { RootStackParamListProps } from '@/types/RoutesType';

export function SettingsPage() {
	const { t } = useTranslation();

	const { cleanUserData } = useUserData();
	const [showModal, setShowModal] = React.useState(false);
	const { currency, enableLocalAuth, language, publicKey } = storageKeys;
	const navigation = useNavigation<NavigationProp<RootStackParamListProps>>();

	async function onExit() {
		await AsyncStorage.multiRemove([currency, enableLocalAuth, language]);
		await SecureStore.deleteItemAsync(publicKey);
		setShowModal(false);
		initializeAppSettings();
		cleanUserData();

		navigation.dispatch(
			CommonActions.reset({
				index: 1,
				routes: [{ name: 'LocalAuthPage' }],
			}),
		);
	}

	const settingsList = [
		{
			testID: 'idPublicKey',
			title: t('public-key'),
			onAction: () => navigation.navigate('PublicKeyPage'),
		},
		{
			testID: 'idLanguage',
			title: t('language'),
			onAction: () => navigation.navigate('LanguagePage'),
		},
		{
			testID: 'idCurrency',
			title: t('currency'),
			onAction: () => navigation.navigate('CurrencyPage'),
		},
		{ testID: 'idTerms', title: t('terms'), onAction: () => navigation.navigate('TermsPage') },
		{
			testID: 'idSupportUs',
			title: t('support-us'),
			onAction: () => navigation.navigate('SupportUsPage'),
		},
		{
			testID: 'idLinks',
			title: 'Links',
			onAction: () => navigation.navigate('LinksPage'),
		},
		{ testID: 'idExit', title: t('exit'), onAction: () => setShowModal(true) },
	];

	return (
		<ScrollViewHeader headerTitle={t('settings')}>
			<LimitedWidthContainer>
				<ActionList list={settingsList} />
				<Text weight="bold" marginT={spaces.space_25}>
					v {Constants.expoConfig?.version != null ? Constants.expoConfig.version : '-'}
				</Text>
			</LimitedWidthContainer>
			<AlertModal
				title={t('do_you_really_want_to_leave')}
				visible={showModal}
				onCancel={() => setShowModal(false)}
				onConfirm={onExit}
			/>
		</ScrollViewHeader>
	);
}
