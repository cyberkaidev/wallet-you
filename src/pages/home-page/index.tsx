import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFormatCurrency } from '@src/hooks';
import { calculateBalance } from '@src/functions';
import { PriceBitcoin, ScrollViewHeaderPage, TransactionList } from '@src/components';
import { useBitcoinDataPrices, useUserData, useAppSettings } from '@src/stores';
import { getBitcoinBalance } from '@src/services';

export function HomePage() {
	const { t } = useTranslation();
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
		<ScrollViewHeaderPage refreshControl={() => onRefresh()}>
			<PriceBitcoin
				title={t('total-balance')}
				price={currencyFormated}
				porcent=""
				bitcoin={balance}
				status={status}
				isPositive
			/>
			<TransactionList />
		</ScrollViewHeaderPage>
	);
}
