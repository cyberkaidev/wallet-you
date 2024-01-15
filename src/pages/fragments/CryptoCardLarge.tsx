import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { IconBitcoin, IconCardano } from '@/assets';
import { SkeletonLoading } from '@/components/SkeletonLoading';
import { Text } from '@/components/Text';
import { borderRadius, colors, spaces } from '@/helpers/themes';
import { useAppSettings } from '@/stores';
import { CryptoCardLargeProps } from '@/types/CryptoCardLargeType';

export function CryptoCardLarge({ type, price, balance, status }: CryptoCardLargeProps) {
	const { t } = useTranslation();
	const { isTablet } = useAppSettings.getState();

	return (
		<View testID="idCryptoCardLarge" style={styles.container}>
			<View style={styles.row}>
				{type === 'bitcoin' && <IconBitcoin size={hp('2.5%')} />}
				{type === 'cardano' && <IconCardano size={hp('2.5%')} />}
				<Text weight="bold" marginL={spaces.space_5}>
					{type === 'bitcoin' && 'Bitcoin'}
					{type === 'cardano' && 'Cardano'}
				</Text>
			</View>
			<View style={styles.priceContainer}>
				{status === 'success' && (
					<Text size="xxxl" weight="medium">
						{price.substring(0, price.length - 2)}
						<Text size="xxl" weight="medium">
							{price.substring(price.length - 2, price.length)}
						</Text>
					</Text>
				)}
				{status === 'failed' && (
					<Text weight="medium" marginB={spaces.space_5}>
						{t('request-error-try-later')}
					</Text>
				)}
				{(status === 'loading' || status === null) && (
					<SkeletonLoading heightPorcent="8%" radius={10} />
				)}
				<Text size={isTablet ? 's' : 'l'} weight="medium">
					{balance} {type === 'bitcoin' ? 'BTC' : 'ADA'}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 'auto',
		height: hp('28%'),
		maxHeight: 450,
		borderRadius: borderRadius.radius_10,
		padding: spaces.space_15,
		backgroundColor: colors.black_000,
		position: 'relative',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	priceContainer: {
		position: 'absolute',
		paddingLeft: spaces.space_15,
		justifyContent: 'center',
		height: hp('28%'),
	},
});
