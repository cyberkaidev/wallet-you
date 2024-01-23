import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { ChartBitcoin } from '@/components/ChartBitcoin';
import { PriceBitcoin } from '@/components/PriceBitcoin';
import { ScrollView } from '@/components/ScrollView';
import { TitleSubtitle } from '@/components/TitleSubtitle';
import { currenciesFormatted } from '@/functions/currenciesFormatted';
import { spaces, width } from '@/helpers/themes';
import { useFormatPercentage } from '@/hooks/useFormatPercentage';
import { useAppSettings } from '@/stores/useAppSettings';
import { useBitcoinDataPrices } from '@/stores/useBitcoinDataPrices';

export function ChartPage() {
	const { t } = useTranslation();
	const { data, status } = useBitcoinDataPrices(state => state);
	const { currency, isTablet } = useAppSettings(state => state);

	const MARGIN_TOP = isTablet ? hp('3.5%') : spaces.space_25;

	const isLoading = status === 'loading' || status === null;
	const { percent, isPositive } = useFormatPercentage(
		data?.price_change_percentage_1h_in_currency[currency] ?? 0,
	);

	const {
		currentCurrency,
		marketCapCurrency,
		marketCapChange24hCurrency,
		totalVolumeCurrency,
		lowPrice24hCurrency,
		highPrice24hCurrency,
		priceChange24hCurrency,
	} = currenciesFormatted({ data, currency });

	return (
		<ScrollView enabledHorizontalPadding={false}>
			<View style={styles.padding}>
				<PriceBitcoin
					title={t('today')}
					price={currentCurrency}
					porcent={percent}
					bitcoin="1"
					isPositive={isPositive}
					status={status}
				/>
			</View>
			<ChartBitcoin />
			<View style={styles.padding}>
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
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	padding: {
		paddingHorizontal: spaces.space_15,
		maxWidth: width.max_width,
		width: '100%',
		alignSelf: 'center',
	},
});
