import React from 'react';

import { ScrollViewHeaderPage, TransactionList } from '@/components';
import { calculateBalance } from '@/functions';
import { useFormatCurrency } from '@/hooks';
import { getBitcoinBalance } from '@/services';
import { useAppSettings, useBitcoinDataPrices, useUserData } from '@/stores';

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
