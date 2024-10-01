import * as SplashScreen from "expo-splash-screen";

export function splashScreen() {
	async function hide() {
		await SplashScreen.hideAsync();
	}

	return { hide };
}
