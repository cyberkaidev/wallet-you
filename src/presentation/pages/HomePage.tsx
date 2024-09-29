import React from "react";

import { getUserBalance } from "~/application/api/getUserBalance";
import { useAppSettings } from "~/application/stores/useAppSettings";
import { useBitcoinPrices } from "~/application/stores/useBitcoinPrices";
import { useUser } from "~/application/stores/useUser";
import { cryptoToCurrency } from "~/application/utils/convertCurrency";
import { ScrollView } from "~/presentation/components/ScrollView";

import { LimitedWidthContainer } from "../components/LimitedWidthContainer";
import { Chart } from "./fragments/Chart";
import { HeaderIcons } from "./fragments/HeaderIcons";
import { MyBitcoinPrice } from "./fragments/MyBitcoinPrice";
import { TransactionList } from "./fragments/TransactionList";

export function HomePage() {
	const { balance, key, fetchTransactions } = useUser();
	const { currency } = useAppSettings();
	const { currentPrice, status } = useBitcoinPrices();
	const currencyFormated = cryptoToCurrency({
		balance,
		cryptoCurrentPrice: currentPrice?.[currency],
	});

	async function onRefresh() {
		await getUserBalance(key);
		await fetchTransactions(key);
		return true;
	}

	return (
		<ScrollView refreshControl={() => onRefresh()}>
			<LimitedWidthContainer>
				<HeaderIcons />
				<MyBitcoinPrice price={currencyFormated} balance={balance} status={status} />
				<Chart price={currentPrice?.[currency]} priceStatus={status ?? "loading"} />
				<TransactionList />
			</LimitedWidthContainer>
		</ScrollView>
	);
}
