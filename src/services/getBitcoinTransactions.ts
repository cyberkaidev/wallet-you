/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export async function getBitcoinTransactions(address: string) {
	try {
		const { data } = await axios.get(`https://${process.env.EXPO_PUBLIC_API}/v1/get-transactions`, {
			params: { publicKey: address },
		});

		return data.transactions;
	} catch (error: any) {
		throw new Error(error?.response?.data?.error ?? 'INTERNAL_ERROR');
	}
}
