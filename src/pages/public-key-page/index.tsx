import React from 'react';
import { themes } from '@src/themes';
import { ButtonTitleGhost, ScrollViewPage, TitleSubtitle } from '@src/components';
import { useTranslation } from 'react-i18next';
import * as Clipboard from 'expo-clipboard';
import { useUserData } from '@src/stores';

export function PublicKeyPage() {
	const { spaces } = themes;
	const { t } = useTranslation();
	const { key } = useUserData(state => state);
	const [copy, setCopy] = React.useState({ isLoading: false, isCopied: false });

	const publicKey = key;

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
		<ScrollViewPage>
			<TitleSubtitle title={t('your-public-key')} subTitle={publicKey} marginB={spaces.space_15} />
			<ButtonTitleGhost
				title={copy.isCopied ? t('copied') : t('copy-address')}
				loading={copy.isLoading}
				size="small"
				onPress={copyToClipboard}
			/>
		</ScrollViewPage>
	);
}
