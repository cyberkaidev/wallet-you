import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderBack } from '@/components/HeaderBack';
import { HeaderTitle } from '@/components/HeaderTitle';
import { colors } from '@/helpers/themes';
import { ChartPage } from '@/pages/ChartPage';
import { CurrencyPage } from '@/pages/CurrencyPage';
import { HomePage } from '@/pages/HomePage';
import { LanguagePage } from '@/pages/LanguagePage';
import { LocalAuthPage } from '@/pages/LocalAuthPage';
import { RegisterKeyPage } from '@/pages/RegisterKeyPage';
import { SettingsPage } from '@/pages/SettingsPage';
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
			<Stack.Screen
				name="ChartPage"
				component={ChartPage}
				options={{ header: () => <HeaderBack title={t('chart')} />, headerShown: true }}
			/>
			<Stack.Screen
				name="SettingsPage"
				component={SettingsPage}
				options={{ header: () => <HeaderBack title={t('settings')} />, headerShown: true }}
			/>
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
		</Stack.Navigator>
	);
}
