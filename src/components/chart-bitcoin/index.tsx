import React from 'react';
import { useTranslation } from 'react-i18next';

import { useBitcoinHistoricalPrice } from '@/stores';
import { themes } from '@/themes';

import { SkeletonLoading } from '../skeleton-loading';
import { Text } from '../text';
import { ChartMain } from './components/chart-main';
import { ChartBitcoinContainer, FailedContainer } from './styles';

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
					<Text color={themes.colors.light_grey} weight="bold">
						{t('request-error-try-later')}
					</Text>
				</FailedContainer>
			)}

			{status === 'success' && <ChartMain data={data} />}
		</ChartBitcoinContainer>
	);
}
