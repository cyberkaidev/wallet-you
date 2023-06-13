import React from 'react';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RegisterKeyPage } from '@src/pages/register-key-page';
import { HeaderFullPage, HeaderSwiperIndicator, TabBar } from './components';
import { useTranslation } from 'react-i18next';
import { RootStackParamListProps } from './types';
import { HomePage } from '@src/pages/home-page';
import { LocalAuthPage } from '@src/pages/local-auth-page';
import { TransactionPage } from '@src/pages/transaction-page';
import { themes } from '@src/themes';
import { BitcoinDataPage } from '@src/pages/bitcoin-data-page';
import { SettingsPage } from '@src/pages/settings-page';
import { PublicKeyPage } from '@src/pages/public-key-page';
import { LanguagePage } from '@src/pages/language-page';
import { CurrencyPage } from '@src/pages/currency-page';
import { TermsPage } from '@src/pages/terms-page';
import { SupportUsPage } from '@src/pages/support-us-page';

const Stack = createStackNavigator<RootStackParamListProps>();
const Tab = createBottomTabNavigator();

export function Routes() {
	const { t } = useTranslation();
	const optionsScreenIOS = {
		gestureEnabled: true,
		cardOverlayEnabled: true,
		...TransitionPresets.ModalPresentationIOS,
	};

	return (
		<Stack.Navigator
			initialRouteName="LocalAuthPage"
			screenOptions={{
				headerShown: false,
				cardStyle: { backgroundColor: themes.colors.black_300 },
			}}
		>
			<Stack.Screen name="LocalAuthPage" component={LocalAuthPage} />
			<Stack.Screen
				name="RegisterKeyPage"
				component={RegisterKeyPage}
				options={{ headerShown: true, header: () => <HeaderFullPage title={t('public-key')} /> }}
			/>
			<Stack.Screen name="TabsRoutes" component={TabsRoutes} />
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
		</Stack.Navigator>
	);
}

function TabsRoutes() {
	const { t } = useTranslation();
	return (
		<Tab.Navigator
			initialRouteName="HomePage"
			screenOptions={{ headerShown: false }}
			sceneContainerStyle={{ backgroundColor: themes.colors.black_300 }}
			tabBar={({ state, descriptors, navigation }) => (
				<TabBar state={state} descriptors={descriptors} navigation={navigation} />
			)}
		>
			<Tab.Screen name="HomePage" component={HomePage} />
			<Tab.Screen name="BitcoinDataPage" component={BitcoinDataPage} />
			<Tab.Screen
				name="SettingsPage"
				component={SettingsPage}
				options={{
					headerShown: true,
					header: () => <HeaderFullPage title={t('settings')} />,
				}}
			/>
		</Tab.Navigator>
	);
}
