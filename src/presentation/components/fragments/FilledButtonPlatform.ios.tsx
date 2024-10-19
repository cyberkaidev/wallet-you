import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "~/presentation/settings/themes";
import { ButtonProps } from "~/shared/Styles";

export function FilledButtonPlatform({
	testID,
	children,
	disabled = false,
	onPress,
	marginT = 0,
	marginB = 0,
	marginR = 0,
	marginL = 0,
}: ButtonProps) {
	return (
		<TouchableOpacity
			testID={testID}
			onPress={onPress}
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
		flexDirection: "row",
		paddingVertical: 10,
		paddingHorizontal: 20,
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
		backgroundColor: colors.black_000,
	},
});
