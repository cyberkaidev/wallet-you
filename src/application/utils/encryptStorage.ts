import { GetItemProps, SetItemProps, StorageModel } from "~/data/models/StorageModel";
import { secureStorage } from "~/data/storages/secureStorage";

export function encryptStorage(): StorageModel {
	const storage = secureStorage();

	async function setItem(props: SetItemProps) {
		await storage.setItem(props);
	}

	async function getItem(props: GetItemProps) {
		const response = await storage.getItem(props);
		return response;
	}

	return { setItem, getItem };
}
