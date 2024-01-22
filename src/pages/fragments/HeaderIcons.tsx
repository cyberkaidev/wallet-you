import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { IconChart, IconSettings } from '@/assets';
import { ButtonIcon } from '@/components/ButtonIcon';
import { colors, spaces } from '@/helpers/themes';

export function HeaderIcons() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<ButtonIcon onPress={() => navigation.navigate('BitcoinDataPage')} marginR={spaces.space_25}>
				<IconChart color={colors.light_cyan} />
			</ButtonIcon>
			<ButtonIcon onPress={() => navigation.navigate('SettingsPage')}>
				<IconSettings color={colors.light_cyan} />
			</ButtonIcon>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
});
