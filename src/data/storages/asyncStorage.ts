import AsyncStorage from "@react-native-async-storage/async-storage";

import { GetItemProps, SetItemProps, StorageModel } from "../models/StorageModel";

export function asyncStorage(): StorageModel {
	async function setItem({ key, item }: SetItemProps) {
		await AsyncStorage.setItem(key, item);
	}

	async function getItem({ key }: GetItemProps) {
		const response = await AsyncStorage.getItem(key);
		return response;
	}

	return { setItem, getItem };
}
