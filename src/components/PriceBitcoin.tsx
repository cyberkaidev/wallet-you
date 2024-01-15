import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { colors, spaces } from '@/helpers/themes';
import { PriceBitcoinProps } from '@/types/PriceBitcoinType';

import { SkeletonLoading } from './SkeletonLoading';
import { Text } from './Text';

export function PriceBitcoin({
	title,
	price,
	porcent,
	isPositive,
	bitcoin,
	status,
}: PriceBitcoinProps) {
	const { t } = useTranslation();

	return (
		<View testID="idPriceBitcoin">
			<Text weight="bold" color={colors.light_grey} marginB={spaces.space_5}>
				{title}
			</Text>
			{(status === 'loading' || status === null) && (
				<SkeletonLoading heightPorcent="8%" radius={10} />
			)}
			{status === 'failed' && (
				<Text color={colors.light_grey} marginB={spaces.space_5}>
					{t('request-error-try-later')}
				</Text>
			)}
			{status === 'success' && (
				<View style={styles.priceAndPorcent}>
					<Text size="xxxl" weight="medium">
						{price.substring(0, price.length - 2)}
						<Text size="xxl" weight="medium">
							{price.substring(price.length - 2, price.length)}
						</Text>
					</Text>
					<Text weight="bold" color={isPositive ? colors.green : colors.red}>
						{porcent}
					</Text>
				</View>
			)}
			<Text size="l" weight="medium">
				{bitcoin} BTC
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	priceAndPorcent: {
		flexDirection: 'row',
	},
});
