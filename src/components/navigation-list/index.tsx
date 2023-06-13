import React from 'react';
import { Text } from '../text';
import * as SecureStore from 'expo-secure-store';
import { ItemButton, NavigationListContainer } from './styles';
import { themes } from '@src/themes';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconArrowRight } from '@src/assets';
import { CommonActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamListProps } from '@src/routes/types';
import { storageKeys } from '@src/helpers';
import { initializeAppSettings } from '@src/functions';
import { useUserData } from '@src/stores';

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
					<Text size="L" weight="bold" color={themes.colors.purple_100}>
						{item.title}
					</Text>
					<IconArrowRight size={15} color={themes.colors.purple_100} />
				</ItemButton>
			))}
		</NavigationListContainer>
	);
}
