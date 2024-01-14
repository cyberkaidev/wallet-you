import './src/translate/i18n';
import 'react-native-reanimated';
import 'react-native-gesture-handler';

import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import * as Device from 'expo-device';
import { useFonts } from 'expo-font';
import * as ScreenOrientation from 'expo-screen-orientation';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View } from 'react-native';

import { initializeAppSettings } from '@/functions/initializeAppSettings';
import { colors } from '@/helpers/themes';
import { RootStack } from '@/routes/RootStack';

export default function App() {
	const [fontsLoaded] = useFonts({
		'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
		'Inter-Medium': require('./assets/fonts/Inter-Medium.otf'),
		'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
	});

	React.useEffect(() => {
		initializeAppSettings();
		changeScreenOrientation();
	}, []);

	async function changeScreenOrientation() {
		const deviceType = await Device.getDeviceTypeAsync();
		const isTablet = Device.DeviceType[deviceType] == 'TABLET';
		if (isTablet) {
			await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
		} else {
			await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
		}
	}

	const onLayoutRootView = React.useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={{ flex: 1, backgroundColor: colors.black_100 }} onLayout={onLayoutRootView}>
			<NavigationContainer theme={DarkTheme}>
				<StatusBar backgroundColor={colors.black_100} style="light" translucent={false} />
				<RootStack />
			</NavigationContainer>
		</View>
	);
}
