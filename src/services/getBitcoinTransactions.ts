import axios from 'axios';

export async function getBitcoinTransactions(address: string) {
	try {
		const { data } = await axios.get(
			`https://${process.env.EXPO_PUBLIC_MY_API_TEST}.com/get-transactions`,
			{
				params: { publicKey: address },
			},
		);

		return data.transactions;
	} catch (_) {
		throw new Error('error-get-bitcoin-transactions');
	}
}
