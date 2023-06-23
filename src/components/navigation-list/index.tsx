import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, NavigationProp, useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { IconArrowRight } from '@/assets';
import { initializeAppSettings } from '@/functions';
import { storageKeys } from '@/helpers';
import { RootStackParamListProps } from '@/routes/types';
import { useUserData } from '@/stores';
import { themes } from '@/themes';

import { Text } from '../text';
import { Indicator, ItemButton, NavigationListContainer } from './styles';

export function NavigationList() {
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
			onNavigate: () => navigation.navigate('PublicKeyPage'),
		},
		{
			testID: 'idLanguage',
			title: t('language'),
			onNavigate: () => navigation.navigate('LanguagePage'),
		},
		{
			testID: 'idCurrency',
			title: t('currency'),
			onNavigate: () => navigation.navigate('CurrencyPage'),
		},
		{ testID: 'idTerms', title: t('terms'), onNavigate: () => navigation.navigate('TermsPage') },
		{
			testID: 'idSupportUs',
			title: t('support-us'),
			onNavigate: () => navigation.navigate('SupportUsPage'),
		},
		{ testID: 'idExit', title: t('exit'), onNavigate: () => onExit() },
	];

	return (
		<NavigationListContainer testID="idNavigationList">
			{list.map((item, index) => (
				<ItemButton key={index} testID={item.testID} onPress={item.onNavigate}>
					<Text size="M" marginL={themes.spaces.space_15}>
						{item.title}
					</Text>
					<IconArrowRight size={10} color={themes.colors.grey_200} />
					{list.length !== index + 1 && <Indicator />}
				</ItemButton>
			))}
		</NavigationListContainer>
	);
}
