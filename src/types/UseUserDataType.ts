export interface Transaction {
	chain: string;
	blockNumber: number | null;
	timestamp: number;
	transactionType?: "incoming" | "outgoing" | "zero-transfer";
	hash: string;
	address: string;
	amount: string;
}

interface DataProps {
	key: string;
	balance: string;
	transactions: {
		data: Transaction[];
		status: "loading" | "success" | "failed" | null;
	};
}

export interface UseUserDataProps extends DataProps {
	setKey: (arg: DataProps["key"]) => void;
	setBalance: (arg: DataProps["balance"]) => void;
	fetchTransactions: (arg: DataProps["key"]) => Promise<void>;
	cleanUserData: () => void;
}
