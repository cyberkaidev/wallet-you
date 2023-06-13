import * as React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Routes } from './src/routes';
import { themes } from './src/themes';
import { initializeAppSettings } from '@src/functions';
import './src/translate/i18n';
import 'react-native-reanimated';
import 'react-native-gesture-handler';

export default function App() {
	const [fontsLoaded] = useFonts({
		'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
		'Inter-Medium': require('./assets/fonts/Inter-Medium.otf'),
		'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
	});

	React.useEffect(() => {
		initializeAppSettings();
	}, []);

	const onLayoutRootView = React.useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={{ flex: 1, backgroundColor: themes.colors.black_300 }} onLayout={onLayoutRootView}>
			<NavigationContainer theme={DarkTheme}>
				<StatusBar backgroundColor={themes.colors.black_300} style="light" translucent={false} />
				<ThemeProvider theme={themes}>
					<Routes />
				</ThemeProvider>
			</NavigationContainer>
		</View>
	);
}
