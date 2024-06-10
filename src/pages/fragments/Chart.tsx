import * as shape from 'd3-shape';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { Path } from 'react-native-svg';
import { AreaChart } from 'react-native-svg-charts';

import { SkeletonLoading } from '@/components/SkeletonLoading';
import { Text } from '@/components/Text';
import { borderRadius, colors, spaces } from '@/helpers/themes';
import { useFormatCurrency } from '@/hooks/useFormatCurrency';
import { useBitcoinHistoricalPrice } from '@/stores/useBitcoinHistoricalPrice';
import { ChartProps, LinePathProps } from '@/types/ChartTypes';

function LinePath({ line }: LinePathProps) {
	return (
		<Path
			testID="idLinePath"
			key="line"
			d={line}
			strokeWidth={2}
			stroke={colors.white}
			fill="none"
		/>
	);
}

export function Chart({ price, priceStatus }: ChartProps) {
	const { t } = useTranslation();
	const { fetchBitcoinHistoricalPrice, status, data } = useBitcoinHistoricalPrice();

	const currentPrice = React.useMemo(() => {
		if (price) return useFormatCurrency(price);
		return useFormatCurrency(0.0);
	}, [price]);

	React.useEffect(() => {
		if (status === null) fetchBitcoinHistoricalPrice();
	}, []);

	if (priceStatus === 'loading' && (status === 'loading' || status === null)) {
		return <SkeletonLoading heightPorcent="10%" radius={10} />;
	}

	return (
		<View style={styles.container}>
			<View>
				<Text weight="bold" color={colors.light_grey}>
					{t('today')}
				</Text>
				<Text size="l" weight="bold">
					{currentPrice}
				</Text>
			</View>

			{status === 'success' && (
				<View testID="idAreaChart">
					<AreaChart
						style={{ height: 40, width: 100 }}
						data={data.map(item => item.value)}
						svg={{ fill: colors.transparent }}
						curve={shape.curveNatural}
						contentInset={{ bottom: 3, top: 3 }}
					>
						<LinePath />
					</AreaChart>
				</View>
			)}

			{status === 'failed' && <View testID="idEmptyLine" style={styles.line} />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: borderRadius.radius_10,
		backgroundColor: colors.black_000,
		paddingHorizontal: spaces.space_15,
		paddingVertical: spaces.space_20,
	},
	line: {
		height: 2,
		width: 100,
		backgroundColor: colors.white,
	},
});
