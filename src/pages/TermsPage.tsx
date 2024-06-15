import React from 'react';

import { LimitedWidthContainer } from '@/components/LimitedWidthContainer';
import { ScrollView } from '@/components/ScrollView';
import { Text } from '@/components/Text';
import { colors, spaces } from '@/helpers/themes';

export function TermsPage() {
	return (
		<ScrollView>
			<LimitedWidthContainer>
				<Text size="xl" weight="bold">
					1 - Security
				</Text>
				<Text size="m" color={colors.light_grey} marginB={spaces.vertical.xs}>
					1.1 - We do not store your public keys in databases, they are encrypted and stored on your
					device;
				</Text>
				<Text size="m" color={colors.light_grey} marginB={spaces.vertical.l}>
					1.2 - All information we collect is stored only on your device, we do not store it in
					databases.
				</Text>
				<Text size="xl" weight="bold">
					2 - What we collect from you
				</Text>
				<Text size="m" color={colors.light_grey} marginB={spaces.vertical.l}>
					2.1 - We only collect the country in which you are accessing so that we know precisely
					which language and currency to select.
				</Text>
				<Text size="xl" weight="bold">
					3 - How we share your information
				</Text>
				<Text size="m" color={colors.light_grey} marginB={spaces.vertical.l}>
					3.1 - We only share your public key with the {'"tatum.com"'} library so that we can
					collect your balance information and transactions on the blockchain.
				</Text>
			</LimitedWidthContainer>
		</ScrollView>
	);
}
