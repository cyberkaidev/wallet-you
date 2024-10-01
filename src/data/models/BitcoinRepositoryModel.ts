import { HttpResponseModel } from "~/infra/models/HttpsRequestModel";

export interface BalanceModel {
	balance: string;
}

export interface TransactionModel {
	chain: string;
	blockNumber: number | null;
	timestamp: number;
	transactionType?: "incoming" | "outgoing" | "zero-transfer";
	hash: string;
	address: string;
	amount: string;
}

export interface TransactionsModel {
	transactions: TransactionModel[];
}

export interface PriceHistoryModel {
	prices: [number, number][];
}

export interface PricesModel {
	market_data: {
		current_price: {
			aud: number;
			brl: number;
			cad: number;
			eur: number;
			gbp: number;
			usd: number;
		};
	};
}

export interface BitcoinRepositoryModel {
	getUserBalance: (address: string) => Promise<HttpResponseModel<BalanceModel>>;
	getUserTransactions: (address: string) => Promise<HttpResponseModel<TransactionsModel>>;
	getPriceHistory: () => Promise<HttpResponseModel<PriceHistoryModel>>;
	getPrices: () => Promise<HttpResponseModel<PricesModel>>;
}
