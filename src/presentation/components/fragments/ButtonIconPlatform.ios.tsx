import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { spaces } from "~/presentation/settings/themes";
import { ButtonProps } from "~/shared/Styles";

export function ButtonIconPlatform({
	testID = "idButtonIcon",
	children,
	onPress,
	disabled = false,
	marginT,
	marginB,
	marginR,
	marginL,
}: ButtonProps) {
	return (
		<TouchableOpacity
			testID={testID}
			onPress={onPress}
			disabled={disabled}
			hitSlop={20}
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
		padding: spaces.horizontal.xs,
	},
});
