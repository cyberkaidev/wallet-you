import Constants from "expo-constants";
import * as Device from "expo-device";

type DeviceTypeModel = "PHONE" | "TABLET" | "DESKTOP" | "TV";

type DeviceCharacteristics = {
	deviceType: () => Promise<DeviceTypeModel>;
	STATUS_BAR_HEIGHT: number;
};

export function deviceCharacteristics(): DeviceCharacteristics {
	async function deviceType() {
		const deviceTypeAsync = await Device.getDeviceTypeAsync();
		const deviceType = Device.DeviceType[deviceTypeAsync] as DeviceTypeModel;
		return deviceType;
	}

	const STATUS_BAR_HEIGHT = Constants.statusBarHeight;

	return { deviceType, STATUS_BAR_HEIGHT };
}
