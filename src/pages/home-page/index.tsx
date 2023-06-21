import React from 'react';
import { useFormatCurrency } from '@src/hooks';
import { calculateBalance } from '@src/functions';
import { ScrollViewHeaderPage, TransactionList } from '@src/components';
import { useBitcoinDataPrices, useUserData, useAppSettings } from '@src/stores';
import { getBitcoinBalance } from '@src/services';
import { CryptoCardLarge } from './components/crypto-card-large';

export function HomePage() {
	const { balance, key, fetchTransactions } = useUserData(state => state);
	const { currency } = useAppSettings(state => state);
	const { data, status } = useBitcoinDataPrices(state => state);
	const currencyFormated = useFormatCurrency(
		calculateBalance({ balance, currentPrice: data?.current_price[currency] }),
	);

	async function onRefresh() {
		await getBitcoinBalance(key);
		await fetchTransactions(key);
		return true;
	}

	return (
		<ScrollViewHeaderPage headerTitle="My wallet" refreshControl={() => onRefresh()}>
			<CryptoCardLarge type="bitcoin" price={currencyFormated} balance={balance} status={status} />
			<TransactionList />
		</ScrollViewHeaderPage>
	);
}
