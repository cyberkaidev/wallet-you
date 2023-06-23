import { AddressTransaction, Bitcoin, Network, ResponseDto, TatumSDK } from '@tatumcom/js';

export async function getBitcoinTransactions(address: string) {
	try {
		const tatum = await TatumSDK.init<Bitcoin>({
			network: Network.BITCOIN,
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
