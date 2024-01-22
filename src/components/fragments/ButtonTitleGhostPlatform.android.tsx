import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';

import { colors } from '@/helpers/themes';
import { ButtonTitleGhostPlatformProps } from '@/types/ButtonTitleGhostType';

export function ButtonTitleGhostPlatform({
	testID,
	children,
	disabled = false,
	onPress,
	marginT = 0,
	marginB = 0,
	marginR = 0,
	marginL = 0,
}: ButtonTitleGhostPlatformProps) {
	return (
		<TouchableHighlight
			testID={testID}
			onPress={() => {
				if (!disabled) onPress();
			}}
			disabled={disabled}
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
			<React.Fragment>{children}</React.Fragment>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
	},
});
