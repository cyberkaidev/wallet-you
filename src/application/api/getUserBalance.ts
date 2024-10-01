import { bitcoinRepository } from "~/data/repositories/bitcoinRepository";

export async function getUserBalance(address: string) {
	const response = await bitcoinRepository().getUserBalance(address);
	return response;
}
