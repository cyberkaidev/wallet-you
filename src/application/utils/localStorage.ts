import { GetItemProps, SetItemProps, StorageModel } from "~/data/models/StorageModel";
import { asyncStorage } from "~/data/storages/asyncStorage";

export function localStorage(): StorageModel {
	const storage = asyncStorage();

	async function setItem(props: SetItemProps) {
		await storage.setItem(props);
	}

	async function getItem(props: GetItemProps) {
		const response = await storage.getItem(props);
		return response;
	}

	return { setItem, getItem };
}
