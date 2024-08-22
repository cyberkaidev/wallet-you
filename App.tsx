import "./src/translate/i18n";
import "react-native-reanimated";
import "react-native-gesture-handler";

import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as ScreenOrientation from "expo-screen-orientation";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { AlertModal } from "@/components/AlertModal";
import { initializeAppSettings } from "@/functions/initializeAppSettings";
import { colors } from "@/helpers/themes";
import { RootStack } from "@/routes/RootStack";

export default function App() {
	const [fontsLoaded] = useFonts({
		"Figtree-Regular": require("./assets/fonts/Figtree-Regular.ttf"),
		"Figtree-Medium": require("./assets/fonts/Figtree-Medium.ttf"),
		"Figtree-Bold": require("./assets/fonts/Figtree-Bold.ttf"),
	});

	React.useEffect(() => {
		initializeAppSettings();
	}, []);

	const onLayoutRootView = React.useCallback(async () => {
		if (fontsLoaded) {
			await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={{ flex: 1, backgroundColor: colors.black_100 }} onLayout={onLayoutRootView}>
			<GestureHandlerRootView style={{ flex: 1 }}>
				<NavigationContainer theme={DarkTheme}>
					<StatusBar backgroundColor={colors.transparent} style="light" translucent />
					<RootStack />
					<AlertModal />
				</NavigationContainer>
			</GestureHandlerRootView>
		</View>
	);
}
