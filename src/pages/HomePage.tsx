import React from 'react';

import { LimitedWidthContainer } from '@/components/LimitedWidthContainer';
import { ScrollView } from '@/components/ScrollView';
import { cryptoToCurrency } from '@/functions/convertCurrency';
import { TransactionList } from '@/pages/fragments/TransactionList';
import { getBitcoinBalance } from '@/services/getBitcoinBalance';
import { useAppSettings } from '@/stores/useAppSettings';
import { useBitcoinDataPrices } from '@/stores/useBitcoinDataPrices';
import { useUserData } from '@/stores/useUserData';

import { Chart } from './fragments/Chart';
import { HeaderIcons } from './fragments/HeaderIcons';
import { MyBitcoinPrice } from './fragments/MyBitcoinPrice';

export function HomePage() {
	const { balance, key, fetchTransactions } = useUserData();
	const { currency } = useAppSettings();
	const { currentPrice, status } = useBitcoinDataPrices();
	const currencyFormated = cryptoToCurrency({
		balance,
		cryptoCurrentPrice: currentPrice?.[currency],
	});

	async function onRefresh() {
		await getBitcoinBalance(key);
		await fetchTransactions(key);
		return true;
	}

	return (
		<ScrollView refreshControl={() => onRefresh()}>
			<LimitedWidthContainer>
				<HeaderIcons />
				<MyBitcoinPrice price={currencyFormated} balance={balance} status={status} />
				<Chart price={currentPrice?.[currency]} />
				<TransactionList />
			</LimitedWidthContainer>
		</ScrollView>
	);
}
