import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

import { colors, spaces } from '@/helpers/themes';
import { ButtonIconPlatformProps } from '@/types/ButtonIconType';

export function ButtonIconPlatform({
	testID = 'idButtonIcon',
	children,
	onPress,
	disabled = false,
	marginT,
	marginB,
	marginR,
	marginL,
}: ButtonIconPlatformProps) {
	return (
		<TouchableHighlight
			testID={testID}
			onPress={onPress}
			disabled={disabled}
			hitSlop={20}
			underlayColor={colors.light_cyan_10pct}
			style={[
				styles.container,
				{
					marginTop: marginT,
					marginBottom: marginB,
					marginRight: marginR,
					marginLeft: marginL,
					opacity: disabled ? 0.5 : 1,
				},
			]}
		>
			{children}
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 100,
		padding: spaces.space_10,
	},
});
