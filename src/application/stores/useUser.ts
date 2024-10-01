import { create } from "zustand";

import { TransactionModel } from "~/data/models/BitcoinRepositoryModel";

import { getUserTransactions } from "../api/getUserTransactions";

type DataProps = {
	key: string;
	balance: string;
	transactions: {
		data: TransactionModel[];
		status: "loading" | "success" | "failed" | null;
	};
};

type Props = DataProps & {
	setKey: (arg: DataProps["key"]) => void;
	setBalance: (arg: DataProps["balance"]) => void;
	fetchTransactions: (arg: DataProps["key"]) => Promise<void>;
	cleanUserData: () => void;
};

export const useUser = create<Props>(set => ({
	key: "",
	balance: "0",
	transactions: {
		data: [],
		status: null,
	},
	setKey: param => set({ key: param }),
	setBalance: param => set({ balance: param }),
	fetchTransactions: async param => {
		const { body, statusCode } = await getUserTransactions(param);

		if (!body || statusCode !== 200) return set({ transactions: { data: [], status: "failed" } });

		set({ transactions: { data: body.transactions, status: "success" } });
	},
	cleanUserData: () => set({ key: "", balance: "0", transactions: { data: [], status: null } }),
}));
