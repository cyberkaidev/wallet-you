import React from 'react';
import { useTranslation } from 'react-i18next';

import { ChartBitcoin, PriceBitcoin, ScrollViewHeaderPage, TitleSubtitle } from '@/components';
import { useFormatCurrency, useFormatPercentage } from '@/hooks';
import { useAppSettings, useBitcoinDataPrices } from '@/stores';
import { themes } from '@/themes';

import { PaddingContainer } from './styles';

export function BitcoinDataPage() {
	const { t } = useTranslation();
	const { data, status } = useBitcoinDataPrices(state => state);
	const { currency } = useAppSettings(state => state);

	const isLoading = status === 'loading' || status === null;
	const { percent, isPositive } = useFormatPercentage(
		data?.price_change_percentage_1h_in_currency[currency] ?? 0,
	);

	const currentCurrency = useFormatCurrency(data?.current_price[currency]);
	const marketCapCurrency = useFormatCurrency(data?.market_cap[currency]);
	const marketCapChange24hCurrency = useFormatCurrency(
		data?.market_cap_change_24h_in_currency[currency],
	);
	const totalVolumeCurrency = useFormatCurrency(data?.total_volume[currency]);
	const lowPrice24hCurrency = useFormatCurrency(data?.low_24h[currency]);
	const highPrice24hCurrency = useFormatCurrency(data?.high_24h[currency]);
	const priceChange24hCurrency = useFormatCurrency(data?.price_change_24h_in_currency[currency]);

	return (
		<ScrollViewHeaderPage headerTitle="Chart" enabledHorizontalPadding={false}>
			<PaddingContainer>
				<PriceBitcoin
					title={t('today')}
					price={currentCurrency}
					porcent={percent}
					bitcoin="1"
					isPositive={isPositive}
					status={status}
				/>
			</PaddingContainer>
			<ChartBitcoin />
			<PaddingContainer>
				<TitleSubtitle
					title={`${t('price-change')} (24h)`}
					subTitle={priceChange24hCurrency}
					marginT={themes.spaces.space_25}
					isLoading={isLoading}
				/>
				<TitleSubtitle
					title={`${t('low')} (24h)`}
					subTitle={lowPrice24hCurrency}
					marginT={themes.spaces.space_25}
					isLoading={isLoading}
				/>
				<TitleSubtitle
					title={`${t('high')} (24h)`}
					subTitle={highPrice24hCurrency}
					marginT={themes.spaces.space_25}
					isLoading={isLoading}
				/>
				<TitleSubtitle
					title={t('market-value')}
					subTitle={marketCapCurrency}
					marginT={themes.spaces.space_25}
					isLoading={isLoading}
				/>
				<TitleSubtitle
					title={`${t('market-value-change')} (24h)`}
					subTitle={marketCapChange24hCurrency}
					marginT={themes.spaces.space_25}
					isLoading={isLoading}
				/>
				<TitleSubtitle
					title={t('total-volume')}
					subTitle={totalVolumeCurrency}
					marginT={themes.spaces.space_25}
					marginB={themes.spaces.space_25}
					isLoading={isLoading}
				/>
			</PaddingContainer>
		</ScrollViewHeaderPage>
	);
}
