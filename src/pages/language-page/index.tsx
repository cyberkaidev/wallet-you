import React from 'react';
import { useTranslation } from 'react-i18next';

import { HeaderSwiperOptions, ScrollViewPage, SelectList } from '@/components';
import { useAppSettings } from '@/stores';
import { UseAppSettingsProps } from '@/stores/use-app-settings/types';

export function LanguagePage() {
	const { t } = useTranslation();
	const { language, setLanguage } = useAppSettings(state => state);
	const [selected, setSelected] = React.useState(language);

	const list = [
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
			<ScrollViewPage>
				<SelectList
					data={list}
					selected={selected}
					onSelected={arg => setSelected(arg as UseAppSettingsProps['language'])}
				/>
			</ScrollViewPage>
		</React.Fragment>
	);
}
