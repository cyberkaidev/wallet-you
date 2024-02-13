import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

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
		<RectButton
			testID={testID}
			onPress={onPress}
			hitSlop={20}
			rippleColor={colors.light_cyan_10pct}
			enabled={!disabled}
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
		</RectButton>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 100,
		padding: spaces.space_10,
	},
});
