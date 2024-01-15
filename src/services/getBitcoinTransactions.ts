import { AddressTransaction, Bitcoin, Network, ResponseDto, TatumSDK } from '@tatumio/tatum';

export async function getBitcoinTransactions(address: string) {
	try {
		const tatum = await TatumSDK.init<Bitcoin>({
			network: Network.BITCOIN,
			apiKey: {
				v4: process.env.EXPO_PUBLIC_TATUM_SDK_V4,
			},
		});

		const transactions: ResponseDto<AddressTransaction[]> = await tatum.address.getTransactions({
			address: address,
		});
		if (transactions.error) throw new Error('error-get-bitcoin-transactions');

		return transactions.data ?? [];
	} catch (error) {
		throw new Error('error-get-bitcoin-transactions');
	}
}
