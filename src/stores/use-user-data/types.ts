import { AddressTransaction } from '@tatumcom/js';

interface DataProps {
	key: string;
	balance: string;
	transactions: {
		data: AddressTransaction[];
		status: 'loading' | 'success' | 'failed' | null;
	};
}

export interface UseUserDataProps extends DataProps {
	setKey: (arg: DataProps['key']) => void;
	setBalance: (arg: DataProps['balance']) => void;
	fetchTransactions: (arg: DataProps['key']) => Promise<void>;
	cleanUserData: () => void;
}
