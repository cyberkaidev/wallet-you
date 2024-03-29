import React from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderSwiperOptions } from '@/components/HeaderSwiperOptions';
import { LimitedWidthContainer } from '@/components/LimitedWidthContainer';
import { ScrollView } from '@/components/ScrollView';
import { SelectList } from '@/components/SelectList';
import { useAppSettings } from '@/stores/useAppSettings';
import { UseAppSettingsProps } from '@/types/UseAppSettingsType';

export function LanguagePage() {
	const { t } = useTranslation();
	const { language, setLanguage } = useAppSettings(state => state);
	const [selected, setSelected] = React.useState(language);

	const languages = [
		{ title: 'English', ref: 'en-us' },
		{ title: 'Português (BR)', ref: 'pt-br' },
		{ title: 'Spanish', ref: 'es-ar' },
		{ title: 'Deutsch', ref: 'de-ch' },
	];

	return (
		<React.Fragment>
			<HeaderSwiperOptions
				title={t('language')}
				onAction={() => setLanguage(selected)}
				disableAction={selected === language}
			/>
			<ScrollView>
				<LimitedWidthContainer>
					<SelectList
						data={languages}
						selected={selected}
						onSelected={arg => setSelected(arg as UseAppSettingsProps['language'])}
					/>
				</LimitedWidthContainer>
			</ScrollView>
		</React.Fragment>
	);
}
