import * as Clipboard from 'expo-clipboard';
import React from 'react';
import { useTranslation } from 'react-i18next';

import {
	ButtonTitleGhost,
	LimitedWidthContainer,
	ScrollView,
	Text,
	TitleSubtitle,
} from '@/components';
import { themes } from '@/themes';

export function SupportUsPage() {
	const { spaces } = themes;
	const { t } = useTranslation();
	const [copy, setCopy] = React.useState({ isLoading: false, isCopied: false });

	const publicKey = 'bc1qrrs0xfdd75fve2etu3936lnzjvwf8dm0w7vmwf';

	async function copyToClipboard() {
		setCopy({ isLoading: true, isCopied: false });
		try {
			await Clipboard.setStringAsync(publicKey);
			setCopy({ isLoading: false, isCopied: true });
		} catch (err) {
			setCopy({ isLoading: false, isCopied: false });
		}
	}

	return (
		<ScrollView>
			<LimitedWidthContainer>
				<TitleSubtitle
					title={t('bitcoin-address')}
					subTitle={publicKey}
					marginB={spaces.space_15}
				/>
				<Text marginB={spaces.space_15}>{t('support-us-by-sending')}</Text>
				<ButtonTitleGhost
					title={copy.isCopied ? t('copied') : t('copy-address')}
					loading={copy.isLoading}
					size="small"
					onPress={copyToClipboard}
				/>
			</LimitedWidthContainer>
		</ScrollView>
	);
}
