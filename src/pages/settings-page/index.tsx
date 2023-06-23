import React from 'react';

import { NavigationList, ScrollViewHeaderPage, Text } from '@/components';
import { themes } from '@/themes';

export function SettingsPage() {
	return (
		<ScrollViewHeaderPage headerTitle="Settings">
			<NavigationList />
			<Text size="S" weight="bold" marginT={themes.spaces.space_25}>
				v 1.1.1
			</Text>
		</ScrollViewHeaderPage>
	);
}
