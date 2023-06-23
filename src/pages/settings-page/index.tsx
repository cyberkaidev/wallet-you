import React from 'react';
import { useTranslation } from 'react-i18next';

import { NavigationList, ScrollViewHeaderPage, Text } from '@/components';
import { themes } from '@/themes';

export function SettingsPage() {
	const { t } = useTranslation();

	return (
		<ScrollViewHeaderPage headerTitle={t('settings')}>
			<NavigationList />
			<Text size="S" weight="bold" marginT={themes.spaces.space_25}>
				v 1.1.1
			</Text>
		</ScrollViewHeaderPage>
	);
}
