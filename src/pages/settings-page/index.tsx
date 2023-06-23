import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, NavigationProp, useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ActionList, ScrollViewHeaderPage, Text } from '@/components';
import { initializeAppSettings } from '@/functions';
import { storageKeys } from '@/helpers';
import { RootStackParamListProps } from '@/routes/types';
import { useUserData } from '@/stores';
import { themes } from '@/themes';

export function SettingsPage() {
	const { t } = useTranslation();
	const { cleanUserData } = useUserData();
	const { currency, enableLocalAuth, language, publicKey } = storageKeys;
	const navigation = useNavigation<NavigationProp<RootStackParamListProps>>();

	async function onExit() {
		await AsyncStorage.multiRemove([currency, enableLocalAuth, language]);
		await SecureStore.deleteItemAsync(publicKey);
		initializeAppSettings();
		cleanUserData();
		navigation.dispatch(
			CommonActions.reset({
				index: 1,
				routes: [{ name: 'LocalAuthPage' }],
			}),
		);
	}

	const list = [
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
		{ testID: 'idExit', title: t('exit'), onAction: () => onExit() },
	];

	return (
		<ScrollViewHeaderPage headerTitle={t('settings')}>
			<ActionList list={list} />
			<Text size="S" weight="bold" marginT={themes.spaces.space_25}>
				v 1.1.1
			</Text>
		</ScrollViewHeaderPage>
	);
}
