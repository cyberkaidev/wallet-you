import { create } from 'zustand';

import { getBitcoinTransactions } from '@/services/getBitcoinTransactions';
import { UseUserDataProps } from '@/types/UseUserDataType';

export const useUserData = create<UseUserDataProps>(set => ({
	key: '',
	balance: '0',
	transactions: {
		data: [],
		status: null,
	},
	setKey: param => set({ key: param }),
	setBalance: param => set({ balance: param }),
	fetchTransactions: async param => {
		try {
			const response = await getBitcoinTransactions(param);
			set({ transactions: { data: response, status: 'success' } });
		} catch (error) {
			set({ transactions: { data: [], status: 'failed' } });
		}
	},
	cleanUserData: () => set({ key: '', balance: '0', transactions: { data: [], status: null } }),
}));
