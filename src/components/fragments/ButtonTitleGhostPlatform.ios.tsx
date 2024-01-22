import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

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
		<TouchableOpacity
			testID={testID}
			onPress={() => {
				if (!disabled) onPress();
			}}
			disabled={disabled}
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
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
