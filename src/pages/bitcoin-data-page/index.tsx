import React from 'react';
import { useTranslation } from 'react-i18next';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { ChartBitcoin, PriceBitcoin, ScrollViewHeader, TitleSubtitle } from '@/components';
import { useFormatCurrency, useFormatPercentage } from '@/hooks';
import { useAppSettings, useBitcoinDataPrices } from '@/stores';
import { themes } from '@/themes';

import { PaddingContainer } from './styles';

export function BitcoinDataPage() {
	const { t } = useTranslation();
	const { data, status } = useBitcoinDataPrices(state => state);
	const { currency, isTablet } = useAppSettings(state => state);

	const MARGIN_TOP = isTablet ? `${hp('5%')}px` : themes.spaces.space_25;

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
		<ScrollViewHeader headerTitle={t('chart')} enabledHorizontalPadding={false}>
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
					marginT={MARGIN_TOP}
					isLoading={isLoading}
				/>
				<TitleSubtitle
					title={`${t('low')} (24h)`}
					subTitle={lowPrice24hCurrency}
					marginT={MARGIN_TOP}
					isLoading={isLoading}
				/>
				<TitleSubtitle
					title={`${t('high')} (24h)`}
					subTitle={highPrice24hCurrency}
					marginT={MARGIN_TOP}
					isLoading={isLoading}
				/>
				<TitleSubtitle
					title={t('market-value')}
					subTitle={marketCapCurrency}
					marginT={MARGIN_TOP}
					isLoading={isLoading}
				/>
				<TitleSubtitle
					title={`${t('market-value-change')} (24h)`}
					subTitle={marketCapChange24hCurrency}
					marginT={MARGIN_TOP}
					isLoading={isLoading}
				/>
				<TitleSubtitle
					title={t('total-volume')}
					subTitle={totalVolumeCurrency}
					marginT={MARGIN_TOP}
					marginB={MARGIN_TOP}
					isLoading={isLoading}
				/>
			</PaddingContainer>
		</ScrollViewHeader>
	);
}
