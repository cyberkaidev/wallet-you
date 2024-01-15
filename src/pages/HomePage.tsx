import React from 'react';
import { useTranslation } from 'react-i18next';

import { LimitedWidthContainer } from '@/components/LimitedWidthContainer';
import { ScrollViewHeader } from '@/components/ScrollViewHeader';
import { TransactionList } from '@/components/TransactionList';
import { calculateBalance } from '@/functions/calculateBalance';
import { useFormatCurrency } from '@/hooks/useFormatCurrency';
import { getBitcoinBalance } from '@/services/getBitcoinBalance';
import { useAppSettings } from '@/stores/useAppSettings';
import { useBitcoinDataPrices } from '@/stores/useBitcoinDataPrices';
import { useUserData } from '@/stores/useUserData';

import { CryptoCardLarge } from './fragments/CryptoCardLarge';

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
		<ScrollViewHeader headerTitle={t('my-wallet')} refreshControl={() => onRefresh()}>
			<LimitedWidthContainer>
				<CryptoCardLarge
					type="bitcoin"
					price={currencyFormated}
					balance={balance}
					status={status}
				/>
				<TransactionList />
			</LimitedWidthContainer>
		</ScrollViewHeader>
	);
}
