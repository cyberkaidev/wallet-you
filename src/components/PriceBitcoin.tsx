import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { colors, spaces } from '@/helpers/themes';
import { PriceBitcoinProps } from '@/types/PriceBitcoinType';

import { SkeletonLoading } from './SkeletonLoading';
import { Text } from './Text';

export function PriceBitcoin({ title, price, bitcoin, status }: PriceBitcoinProps) {
	const { t } = useTranslation();

	return (
		<View testID="idPriceBitcoin" style={styles.container}>
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
				<Text size="xxxl" weight="bold">
					{price}
				</Text>
			)}
			<Text size="l" weight="medium">
				{bitcoin} BTC
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
