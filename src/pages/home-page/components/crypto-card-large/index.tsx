import React from 'react';
import { Text } from '@src/components';
import { CryptoCardLargeContainer, PriceContainer, Row } from './styles';
import { IconBitcoin, IconCardano } from '@src/assets';
import { themes } from '@src/themes';
import { CryptoCardLargeProps } from './types';

export function CryptoCardLarge({ type, price, balance, status }: CryptoCardLargeProps) {
	return (
		<CryptoCardLargeContainer testID="idCryptoCardLarge">
			<Row>
				{type === 'bitcoin' && <IconBitcoin />}
				{type === 'cardano' && <IconCardano />}
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
				<Text size="L" weight="medium">
					{balance} {type === 'bitcoin' ? 'BTC' : 'ADA'}
				</Text>
			</PriceContainer>
		</CryptoCardLargeContainer>
	);
}
