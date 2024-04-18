import axios from 'axios';

import { useUserData } from '@/stores/useUserData';

export async function getBitcoinBalance(address: string) {
	const { setBalance } = useUserData.getState();

	try {
		const { data } = await axios.get(
			`https://${process.env.EXPO_PUBLIC_MY_API_TEST}.com/get-balance`,
			{
				params: { publicKey: address },
			},
		);
		setBalance(data.balance);
	} catch (_) {
		return 'error-get-balance-bitcoin';
	}
}
