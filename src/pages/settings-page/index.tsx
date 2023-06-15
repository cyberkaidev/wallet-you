import React from 'react';
import { NavigationList, Text, ScrollViewPage } from '@src/components';
import { themes } from '@src/themes';

export function SettingsPage() {
	return (
		<ScrollViewPage>
			<NavigationList />
			<Text
				size="M"
				weight="bold"
				marginT={themes.spaces.space_25}
				marginB={themes.spaces.space_25}
			>
				v 1.1.0
			</Text>
		</ScrollViewPage>
	);
}
