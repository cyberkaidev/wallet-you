import { TATUM_SDK_V1, TATUM_SDK_V2 } from '@env';
import { AddressBalance, Bitcoin, Network, ResponseDto, TatumSDK } from '@tatumcom/js';

import { useUserData } from '@/stores/use-user-data';

export async function getBitcoinBalance(address: string) {
	const { setBalance } = useUserData.getState();

	try {
		const tatum = await TatumSDK.init<Bitcoin>({
			network: Network.BITCOIN,
			apiKey: {
				v1: TATUM_SDK_V1,
				v2: TATUM_SDK_V2,
			},
		});

		const balance: ResponseDto<AddressBalance[]> = await tatum.address.getBalance({
			addresses: [address],
		});

		if (!balance.data) return 'not-found';
		if (balance.error) return 'error-get-balance-bitcoin';
		setBalance(balance.data[0].balance);
	} catch (error) {
		return 'error-get-balance-bitcoin';
	}
}
