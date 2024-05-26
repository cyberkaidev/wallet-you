import { useNetInfo } from '@react-native-community/netinfo';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderBack } from '@/components/HeaderBack';
import { colors } from '@/helpers/themes';
import { ChartPage } from '@/pages/ChartPage';
import { CurrencyPage } from '@/pages/CurrencyPage';
import { HomePage } from '@/pages/HomePage';
import { LanguagePage } from '@/pages/LanguagePage';
import { LocalAuthPage } from '@/pages/LocalAuthPage';
import { NoInternetPage } from '@/pages/NoInternetPage';
import { RegisterKeyPage } from '@/pages/RegisterKeyPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { TermsPage } from '@/pages/TermsPage';
import { TransactionPage } from '@/pages/TransactionPage';
import { RootStackParamListProps } from '@/types/RoutesType';

import { HeaderSwiperIndicator } from './fragments/HeaderSwiperIndicator';
import { HeaderTitle } from './fragments/HeaderTitle';

const Stack = createStackNavigator<RootStackParamListProps>();

const optionsScreenIOS = {
	gestureEnabled: true,
	cardOverlayEnabled: true,
	...TransitionPresets.ModalPresentationIOS,
};

export function RootStack() {
	const { t } = useTranslation();
	const { isConnected } = useNetInfo();

	return (
		<Stack.Navigator
			initialRouteName={isConnected ? 'LocalAuthPage' : 'NoInternetPage'}
			screenOptions={{
				headerShown: false,
				cardStyle: { backgroundColor: colors.black_100 },
			}}
		>
			{isConnected === false ? (
				<Stack.Screen name="NoInternetPage" component={NoInternetPage} />
			) : (
				<Stack.Group>
					<Stack.Screen name="LocalAuthPage" component={LocalAuthPage} />
					<Stack.Screen
						name="RegisterKeyPage"
						component={RegisterKeyPage}
						options={{ header: () => <HeaderTitle title="Wallet you" />, headerShown: true }}
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
							header: ({ navigation }) => (
								<HeaderSwiperIndicator title={t('transaction')} navigation={navigation} />
							),
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
							header: ({ navigation }) => (
								<HeaderSwiperIndicator title={t('terms')} navigation={navigation} />
							),
							headerShown: true,
							...optionsScreenIOS,
						}}
					/>
				</Stack.Group>
			)}
		</Stack.Navigator>
	);
}
