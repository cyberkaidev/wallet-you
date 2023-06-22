import React from 'react';
import { NavigationList, Text, ScrollViewHeaderPage } from '@src/components';
import { themes } from '@src/themes';

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
