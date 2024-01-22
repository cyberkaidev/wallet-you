import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { IconBitcoin } from '@/assets';
import { SkeletonLoading } from '@/components/SkeletonLoading';
import { Text } from '@/components/Text';
import { colors, spaces } from '@/helpers/themes';
import { MyBitcoinPriceProps } from '@/types/MyBitcoinPriceType';

export function MyBitcoinPrice({ price, balance, status }: MyBitcoinPriceProps) {
	const { t } = useTranslation();

	return (
		<View testID="idMyBitcoinPrice" style={styles.container}>
			<View style={styles.row}>
				<IconBitcoin size={hp('2.5%')} />
				<Text weight="bold" marginL={spaces.space_5}>
					{t('total-balance')}
				</Text>
			</View>

			{status === 'success' && (
				<React.Fragment>
					<Text size="xxxl" weight="medium">
						{price}
					</Text>
					<Text weight="bold" color={colors.light_grey}>
						{balance} BTC
					</Text>
				</React.Fragment>
			)}
			{status === 'failed' && (
				<React.Fragment>
					<Text size="xxxl" weight="medium">
						--
					</Text>
					<Text weight="bold" color={colors.light_grey}>
						--
					</Text>
				</React.Fragment>
			)}
			{(status === 'loading' || status === null) && (
				<React.Fragment>
					<SkeletonLoading
						heightPorcent="7%"
						widthPorcent="60%"
						radius={10}
						marginT={spaces.space_5}
					/>
					<SkeletonLoading
						heightPorcent="3%"
						widthPorcent="30%"
						radius={10}
						marginT={spaces.space_5}
					/>
				</React.Fragment>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingVertical: hp('20%'),
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
