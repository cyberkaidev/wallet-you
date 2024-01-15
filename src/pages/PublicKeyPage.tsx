import * as Clipboard from 'expo-clipboard';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonTitleGhost } from '@/components/ButtonTitleGhost';
import { LimitedWidthContainer } from '@/components/LimitedWidthContainer';
import { ScrollView } from '@/components/ScrollView';
import { TitleSubtitle } from '@/components/TitleSubtitle';
import { spaces } from '@/helpers/themes';
import { useUserData } from '@/stores/useUserData';

export function PublicKeyPage() {
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
		<ScrollView>
			<LimitedWidthContainer>
				<TitleSubtitle
					title={t('your-public-key')}
					subTitle={publicKey}
					marginB={spaces.space_15}
				/>
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
