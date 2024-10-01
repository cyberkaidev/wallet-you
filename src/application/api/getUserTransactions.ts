import { bitcoinRepository } from "~/data/repositories/bitcoinRepository";

export async function getUserTransactions(address: string) {
	const response = await bitcoinRepository().getUserTransactions(address);
	return response;
}
