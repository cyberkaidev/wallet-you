import "./src/application/settings/initializeAppInternationalization";
import "react-native-reanimated";
import "react-native-gesture-handler";

import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { initializeAppSettings } from "~/application/settings/initializeAppSettings";
import { orientationLock } from "~/application/settings/orientationLock";
import { splashScreen } from "~/application/settings/splashHide";
import { AlertModal } from "~/presentation/components/AlertModal";
import { RootStack } from "~/presentation/routes/RootStack";
import { colors } from "~/presentation/settings/themes";

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
			await orientationLock();
			await splashScreen().hide();
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
