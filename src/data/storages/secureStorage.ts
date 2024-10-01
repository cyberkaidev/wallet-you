import * as SecureStore from "expo-secure-store";

import { GetItemProps, SetItemProps, StorageModel } from "../models/StorageModel";

export function secureStorage(): StorageModel {
	async function setItem({ key, item }: SetItemProps) {
		await SecureStore.setItemAsync(key, item);
	}

	async function getItem({ key }: GetItemProps) {
		const response = await SecureStore.getItemAsync(key);
		return response;
	}

	return { setItem, getItem };
}
