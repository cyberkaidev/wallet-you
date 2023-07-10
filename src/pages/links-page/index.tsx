import * as Linking from 'expo-linking';
import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { IconGithub, IconTwitter } from '@/assets';
import { ActionList, ScrollView } from '@/components';

export function LinksPage() {
	const list = [
		{
			testID: 'idGithub',
			prefixIcon: <IconGithub size={hp('2.5%')} />,
			title: '@cyberkaidev',
			onAction: () => Linking.openURL('https://github.com/cyberkaidev/wallet-you'),
		},
		{
			testID: 'idTwitter',
			prefixIcon: <IconTwitter size={hp('2.5%')} />,
			title: 'cyberkaidev/wallet-yout',
			onAction: () => Linking.openURL('https://twitter.com/cyberkaidev'),
		},
	];

	return (
		<ScrollView>
			<ActionList list={list} />
		</ScrollView>
	);
}
