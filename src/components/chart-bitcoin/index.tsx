import React from 'react';
import { ChartBitcoinContainer, FailedContainer } from './styles';
import { SkeletonLoading } from '../skeleton-loading';
import { ChartMain } from './components/chart-main';
import { Text } from '../text';
import { useBitcoinHistoricalPrice } from '@src/stores';
import { themes } from '@src/themes';
import { useTranslation } from 'react-i18next';

export function ChartBitcoin() {
	const { t } = useTranslation();
	const { fetchBitcoinHistoricalPrice, status, data } = useBitcoinHistoricalPrice(state => state);

	React.useEffect(() => {
		if (status === null) fetchBitcoinHistoricalPrice();
	}, []);

	return (
		<ChartBitcoinContainer testID="idChartBitcoin">
			{(status === 'loading' || status === null) && (
				<SkeletonLoading widthPorcent="100%" heightPorcent="35%" radius={0} />
			)}

			{status === 'failed' && (
				<FailedContainer>
					<Text color={themes.colors.grey_300} weight="bold">
						{t('request-error-try-later')}
					</Text>
				</FailedContainer>
			)}

			{status === 'success' && <ChartMain data={data} />}
		</ChartBitcoinContainer>
	);
}
