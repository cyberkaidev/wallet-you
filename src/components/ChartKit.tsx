import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { colors, spaces } from '@/helpers/themes';
import { useAppSettings } from '@/stores/useAppSettings';
import { useBitcoinHistoricalPrice } from '@/stores/useBitcoinHistoricalPrice';

import { ChartMain } from './fragments/ChartMain';
import { SkeletonLoading } from './SkeletonLoading';
import { Text } from './Text';

export function ChartKit() {
	const { t } = useTranslation();
	const { isTablet } = useAppSettings();
	const { fetchBitcoinHistoricalPrice, status, data } = useBitcoinHistoricalPrice();

	React.useEffect(() => {
		if (status === null) fetchBitcoinHistoricalPrice();
	}, []);

	return (
		<View
			testID="idChartKit"
			style={[styles.container, { marginTop: isTablet ? hp('5%') : spaces.space_25 }]}
		>
			{(status === 'loading' || status === null) && (
				<SkeletonLoading heightPorcent="35%" radius={0} />
			)}

			{status === 'failed' && (
				<View style={styles.failed}>
					<Text color={colors.light_grey} weight="bold">
						{t('request-error-try-later')}
					</Text>
				</View>
			)}

			{status === 'success' && <ChartMain data={data} />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	failed: {
		height: wp('35%'),
		width: wp('100%'),
		justifyContent: 'center',
		paddingHorizontal: spaces.space_15,
	},
});
