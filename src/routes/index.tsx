import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { BitcoinDataPage } from '@/pages/bitcoin-data-page';
import { CurrencyPage } from '@/pages/currency-page';
import { HomePage } from '@/pages/home-page';
import { LanguagePage } from '@/pages/language-page';
import { LinksPage } from '@/pages/links-page';
import { LocalAuthPage } from '@/pages/local-auth-page';
import { PublicKeyPage } from '@/pages/public-key-page';
import { RegisterKeyPage } from '@/pages/register-key-page';
import { SettingsPage } from '@/pages/settings-page';
import { SupportUsPage } from '@/pages/support-us-page';
import { TermsPage } from '@/pages/terms-page';
import { TransactionPage } from '@/pages/transaction-page';
import { themes } from '@/themes';

import { HeaderSwiperIndicator, TabBar } from './components';
import { RootStackParamListProps } from './types';

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
			<Stack.Screen name="RegisterKeyPage" component={RegisterKeyPage} />
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

function TabsRoutes() {
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
			<Tab.Screen name="SettingsPage" component={SettingsPage} />
		</Tab.Navigator>
	);
}
