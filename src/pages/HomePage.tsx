import React from 'react';

import { LimitedWidthContainer } from '@/components/LimitedWidthContainer';
import { ScrollView } from '@/components/ScrollView';
import { TransactionList } from '@/components/TransactionList';
import { calculateBalance } from '@/functions/calculateBalance';
import { useFormatCurrency } from '@/hooks/useFormatCurrency';
import { getBitcoinBalance } from '@/services/getBitcoinBalance';
import { useAppSettings } from '@/stores/useAppSettings';
import { useBitcoinDataPrices } from '@/stores/useBitcoinDataPrices';
import { useUserData } from '@/stores/useUserData';

import { MyBitcoinPrice } from './fragments/MyBitcoinPrice';

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
		<ScrollView refreshControl={() => onRefresh()}>
			<LimitedWidthContainer>
				<MyBitcoinPrice price={currencyFormated} balance={balance} status={status} />
				<TransactionList />
			</LimitedWidthContainer>
		</ScrollView>
	);
}
