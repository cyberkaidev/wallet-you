import * as Linking from 'expo-linking';
import React from 'react';

import { IconGithub, IconTwitter } from '@/assets';
import { ActionList, ScrollViewPage } from '@/components';

export function LinksPage() {
	const list = [
		{
			testID: 'idGithub',
			prefixIcon: <IconGithub size={20} />,
			title: '@cyberkaidev',
			onAction: () => Linking.openURL('https://github.com/cyberkaidev/wallet-you'),
		},
		{
			testID: 'idTwitter',
			prefixIcon: <IconTwitter size={20} />,
			title: 'cyberkaidev/wallet-yout',
			onAction: () => Linking.openURL('https://twitter.com/cyberkaidev'),
		},
	];

	return (
		<ScrollViewPage>
			<ActionList list={list} />
		</ScrollViewPage>
	);
}
