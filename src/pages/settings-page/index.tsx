import React from 'react';
import { NavigationList, Text, ScrollViewHeaderPage } from '@src/components';
import { themes } from '@src/themes';

export function SettingsPage() {
	return (
		<ScrollViewHeaderPage headerTitle="Settings">
			<NavigationList />
			<Text
				size="M"
				weight="bold"
				marginT={themes.spaces.space_25}
				marginB={themes.spaces.space_25}
			>
				v 1.1.1
			</Text>
		</ScrollViewHeaderPage>
	);
}
