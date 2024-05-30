import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { IconChart, IconSettings } from '@/assets';
import { ButtonIcon } from '@/components/ButtonIcon';
import { statusBarHeight } from '@/helpers/statusBarHeight';
import { colors, spaces } from '@/helpers/themes';

export function HeaderIcons() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<ButtonIcon
				testID="idChart"
				onPress={() => navigation.navigate('ChartPage')}
				marginR={spaces.space_25}
			>
				<IconChart color={colors.light_cyan} />
			</ButtonIcon>
			<ButtonIcon testID="idSettings" onPress={() => navigation.navigate('SettingsPage')}>
				<IconSettings color={colors.light_cyan} />
			</ButtonIcon>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: statusBarHeight,
	},
});
