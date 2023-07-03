import React from 'react';
import { useTranslation } from 'react-i18next';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { IconBitcoin, IconCardano } from '@/assets';
import { SkeletonLoading, Text } from '@/components';
import { useAppSettings } from '@/stores';
import { themes } from '@/themes';

import { CryptoCardLargeContainer, PriceContainer, Row } from './styles';
import { CryptoCardLargeProps } from './types';

export function CryptoCardLarge({ type, price, balance, status }: CryptoCardLargeProps) {
	const { t } = useTranslation();
	const { isTablet } = useAppSettings.getState();

	return (
		<CryptoCardLargeContainer testID="idCryptoCardLarge">
			<Row>
				{type === 'bitcoin' && <IconBitcoin size={hp('2.5%')} />}
				{type === 'cardano' && <IconCardano size={hp('2.5%')} />}
				<Text size="S" weight="bold" marginL={themes.spaces.space_5}>
					{type === 'bitcoin' && 'Bitcoin'}
					{type === 'cardano' && 'Cardano'}
				</Text>
			</Row>
			<PriceContainer>
				{status === 'success' && (
					<Text size="XXXL" weight="medium">
						{price.substring(0, price.length - 2)}
						<Text size="XXL" weight="medium">
							{price.substring(price.length - 2, price.length)}
						</Text>
					</Text>
				)}
				{status === 'failed' && (
					<Text size="S" weight="medium" marginB={themes.spaces.space_5}>
						{t('request-error-try-later')}
					</Text>
				)}
				{(status === 'loading' || status === null) && (
					<SkeletonLoading widthPorcent="70%" heightPorcent="8%" radius={10} />
				)}
				<Text size={isTablet ? 'S' : 'L'} weight="medium">
					{balance} {type === 'bitcoin' ? 'BTC' : 'ADA'}
				</Text>
			</PriceContainer>
		</CryptoCardLargeContainer>
	);
}
