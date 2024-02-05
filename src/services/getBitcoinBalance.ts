import { AddressBalance, Bitcoin, Network, ResponseDto, TatumSDK } from '@tatumio/tatum';

import { useUserData } from '@/stores/useUserData';

export async function getBitcoinBalance(address: string) {
	const { setBalance } = useUserData.getState();

	try {
		const tatum = await TatumSDK.init<Bitcoin>({
			network: Network.BITCOIN,
			apiKey: {
				v4: process.env.EXPO_PUBLIC_TATUM_SDK_V4,
			},
		});

		const balance: ResponseDto<AddressBalance[]> = await tatum.address.getBalance({
			addresses: [address],
		});

		if (!balance.data) return 'not-found';
		if (balance.error) return 'error-get-balance-bitcoin';
		if (balance.data[0].decimals) {
			const number = Number(balance.data[0].balance).toFixed(balance.data[0].decimals);
			setBalance(number);
		} else {
			setBalance(balance.data[0].balance);
		}
	} catch (error) {
		return 'error-get-balance-bitcoin';
	}
}
