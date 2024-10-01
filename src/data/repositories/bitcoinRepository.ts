import { axiosHttpsRequest } from "~/infra/https/axiosHttpsRequest";

import {
	BalanceModel,
	BitcoinRepositoryModel,
	PriceHistoryModel,
	PricesModel,
	TransactionsModel,
} from "../models/BitcoinRepositoryModel";

export function bitcoinRepository(): BitcoinRepositoryModel {
	async function getUserBalance(address: string) {
		const response = await axiosHttpsRequest<BalanceModel>({
			url: `https://${process.env.EXPO_PUBLIC_API}/v1/bitcoin/get-balance/${address}`,
			method: "GET",
		});

		return response;
	}

	async function getUserTransactions(address: string) {
		const response = await axiosHttpsRequest<TransactionsModel>({
			url: `https://${process.env.EXPO_PUBLIC_API}/v1/bitcoin/get-transactions/${address}`,
			method: "GET",
		});

		return response;
	}

	async function getPriceHistory() {
		const response = await axiosHttpsRequest<PriceHistoryModel>({
			url: "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1",
			method: "GET",
		});

		return response;
	}

	async function getPrices() {
		const response = await axiosHttpsRequest<PricesModel>({
			url: "https://api.coingecko.com/api/v3/coins/bitcoin",
			method: "GET",
		});

		return response;
	}

	return { getUserBalance, getUserTransactions, getPriceHistory, getPrices };
}
