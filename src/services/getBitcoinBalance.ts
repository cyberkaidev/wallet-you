/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

import { useUserData } from '@/stores/useUserData';

export async function getBitcoinBalance(address: string) {
	const { setBalance } = useUserData.getState();

	try {
		const { data } = await axios.get(`https://${process.env.EXPO_PUBLIC_API}/v1/get-balance`, {
			params: { publicKey: address },
		});

		setBalance(data.balance);
	} catch (error: any) {
		return error?.response?.data?.error ?? 'INTERNAL_ERROR';
	}
}
