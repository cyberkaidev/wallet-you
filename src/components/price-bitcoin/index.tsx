import React from 'react';
import { Text } from '../text';
import { PriceAndPorcent, PriceBitcoinContainer } from './styles';
import { themes } from '@src/themes';
import { PriceBitcoinProps } from './types';
import { SkeletonLoading } from '../skeleton-loading';
import { useTranslation } from 'react-i18next';

export function PriceBitcoin({
	title,
	price,
	porcent,
	isPositive,
	bitcoin,
	status,
}: PriceBitcoinProps) {
	const { colors, spaces } = themes;
	const { t } = useTranslation();

	return (
		<PriceBitcoinContainer testID="idPriceBitcoin">
			<Text size="S" weight="bold" color={colors.grey_300} marginB={spaces.space_5}>
				{title}
			</Text>
			{(status === 'loading' || status === null) && (
				<SkeletonLoading widthPorcent="70%" heightPorcent="8%" radius={10} />
			)}
			{status === 'failed' && (
				<Text color={colors.grey_300} marginB={spaces.space_5}>
					{t('request-error-try-later')}
				</Text>
			)}
			{status === 'success' && (
				<PriceAndPorcent>
					<Text size="XXXL" weight="medium">
						{price.substring(0, price.length - 2)}
						<Text size="XXL" weight="medium">
							{price.substring(price.length - 2, price.length)}
						</Text>
					</Text>
					<Text size="S" weight="bold" color={isPositive ? colors.green : colors.red}>
						{porcent}
					</Text>
				</PriceAndPorcent>
			)}
			<Text size="L" weight="medium">
				{bitcoin} BTC
			</Text>
		</PriceBitcoinContainer>
	);
}
