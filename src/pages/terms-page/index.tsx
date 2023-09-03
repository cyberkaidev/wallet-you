import React from 'react';

import { LimitedWidthContainer, ScrollView, Text } from '@/components';
import { themes } from '@/themes';

export function TermsPage() {
	const { spaces, colors } = themes;

	return (
		<ScrollView>
			<LimitedWidthContainer>
				<Text size="XL" weight="bold">
					1 - Security
				</Text>
				<Text size="M" color={colors.light_grey} marginB={spaces.space_15}>
					1.1 - We do not store your public keys in databases, they are encrypted and stored on your
					device;
				</Text>
				<Text size="M" color={colors.light_grey} marginB={spaces.space_25}>
					1.2 - All information we collect is stored only on your device, we do not store it in
					databases.
				</Text>
				<Text size="XL" weight="bold">
					2 - What we collect from you
				</Text>
				<Text size="M" color={colors.light_grey} marginB={spaces.space_25}>
					2.1 - We only collect the country in which you are accessing so that we know precisely
					which language and currency to select.
				</Text>
				<Text size="XL" weight="bold">
					3 - How we share your information
				</Text>
				<Text size="M" color={colors.light_grey} marginB={spaces.space_25}>
					3.1 - We only share your public key with the {'"tatum.com"'} library so that we can
					collect your balance information and transactions on the blockchain.
				</Text>
			</LimitedWidthContainer>
		</ScrollView>
	);
}
