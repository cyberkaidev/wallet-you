import * as ScreenOrientation from "expo-screen-orientation";

export async function orientationLock() {
	await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}
