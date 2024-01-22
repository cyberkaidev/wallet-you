import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderTitle } from '@/components/HeaderTitle';
import { colors } from '@/helpers/themes';
import { BitcoinDataPage } from '@/pages/BitcoinDataPage';
import { CurrencyPage } from '@/pages/CurrencyPage';
import { HomePage } from '@/pages/HomePage';
import { LanguagePage } from '@/pages/LanguagePage';
import { LinksPage } from '@/pages/LinksPage';
import { LocalAuthPage } from '@/pages/LocalAuthPage';
import { PublicKeyPage } from '@/pages/PublicKeyPage';
import { RegisterKeyPage } from '@/pages/RegisterKeyPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { SupportUsPage } from '@/pages/SupportUsPage';
import { TermsPage } from '@/pages/TermsPage';
import { TransactionPage } from '@/pages/TransactionPage';
import { RootStackParamListProps } from '@/types/RoutesType';

import { HeaderSwiperIndicator } from './fragments/HeaderSwiperIndicator';

const Stack = createStackNavigator<RootStackParamListProps>();

const optionsScreenIOS = {
	gestureEnabled: true,
	cardOverlayEnabled: true,
	...TransitionPresets.ModalPresentationIOS,
};

export function RootStack() {
	const { t } = useTranslation();

	return (
		<Stack.Navigator
			initialRouteName="LocalAuthPage"
			screenOptions={{
				headerShown: false,
				cardStyle: { backgroundColor: colors.black_100 },
			}}
		>
			<Stack.Screen name="LocalAuthPage" component={LocalAuthPage} />
			<Stack.Screen
				name="RegisterKeyPage"
				component={RegisterKeyPage}
				options={{ header: () => <HeaderTitle title={t('address')} />, headerShown: true }}
			/>
			<Stack.Screen name="HomePage" component={HomePage} />
			<Stack.Screen name="BitcoinDataPage" component={BitcoinDataPage} />
			<Stack.Screen name="SettingsPage" component={SettingsPage} />
			<Stack.Screen
				name="TransactionPage"
				component={TransactionPage}
				options={{
					header: () => <HeaderSwiperIndicator title={t('transaction')} />,
					headerShown: true,
					...optionsScreenIOS,
				}}
			/>
			<Stack.Screen
				name="PublicKeyPage"
				component={PublicKeyPage}
				options={{
					header: () => <HeaderSwiperIndicator title={t('public-key')} />,
					headerShown: true,
					...optionsScreenIOS,
				}}
			/>
			<Stack.Screen
				name="LanguagePage"
				component={LanguagePage}
				options={{
					...optionsScreenIOS,
				}}
			/>
			<Stack.Screen
				name="CurrencyPage"
				component={CurrencyPage}
				options={{
					...optionsScreenIOS,
				}}
			/>
			<Stack.Screen
				name="TermsPage"
				component={TermsPage}
				options={{
					header: () => <HeaderSwiperIndicator title={t('terms')} />,
					headerShown: true,
					...optionsScreenIOS,
				}}
			/>
			<Stack.Screen
				name="SupportUsPage"
				component={SupportUsPage}
				options={{
					header: () => <HeaderSwiperIndicator title={t('support-us')} />,
					headerShown: true,
					...optionsScreenIOS,
				}}
			/>
			<Stack.Screen
				name="LinksPage"
				component={LinksPage}
				options={{
					header: () => <HeaderSwiperIndicator title={'Links'} />,
					headerShown: true,
					...optionsScreenIOS,
				}}
			/>
		</Stack.Navigator>
	);
}
