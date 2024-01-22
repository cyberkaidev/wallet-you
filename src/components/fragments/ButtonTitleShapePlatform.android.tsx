import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

import { borderRadius, colors, spaces } from '@/helpers/themes';
import { useAppSettings } from '@/stores/useAppSettings';
import { ButtonTitleShapePlatformProps } from '@/types/ButtonTitleShapeType';

export function ButtonTitleShapePlatform({
	testID,
	children,
	size,
	disabled = false,
	onPress,
	marginT = 0,
	marginB = 0,
	marginR = 0,
	marginL = 0,
}: ButtonTitleShapePlatformProps) {
	const { isTablet } = useAppSettings.getState();

	const LARGE_PADDING_V = isTablet ? spaces.space_20 : spaces.space_15;
	const LARGE_PADDING_H = isTablet ? spaces.space_15 : spaces.space_10;

	return (
		<TouchableHighlight
			testID={testID}
			onPress={onPress}
			disabled={disabled}
			underlayColor={colors.white_10pct}
			style={[
				styles.container,
				{
					width: size === 'large' ? '90%' : 'auto',
					paddingHorizontal: size === 'large' ? 0 : spaces.space_25,
					paddingVertical: size === 'large' ? LARGE_PADDING_V : LARGE_PADDING_H,
					borderRadius: size === 'large' ? borderRadius.radius_15 : borderRadius.radius_10,
					marginTop: marginT,
					marginBottom: marginB,
					marginRight: marginR,
					marginLeft: marginL,
					opacity: disabled ? 0.5 : 1,
				},
			]}
		>
			<React.Fragment>{children}</React.Fragment>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		flexDirection: 'row',
		backgroundColor: colors.light_cyan,
		marginBottom: spaces.space_15,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
