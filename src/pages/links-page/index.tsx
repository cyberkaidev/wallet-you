import React from 'react';

import { ActionList, ScrollViewPage } from '@/components';

export function LinksPage() {
	const list = [
		{
			testID: 'idGithub',
			title: '@cyberkaidev',
			onAction: () => console.log(''),
		},
		{
			testID: 'idTwitter',
			title: 'cyberkaidev/wallet-yout',
			onAction: () => console.log(''),
		},
	];

	return (
		<ScrollViewPage>
			<ActionList list={list} />
		</ScrollViewPage>
	);
}
