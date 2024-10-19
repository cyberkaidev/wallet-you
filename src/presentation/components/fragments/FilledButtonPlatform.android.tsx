import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

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
		<RectButton
			testID={testID}
			onPress={onPress}
			rippleColor={colors.white_10pct}
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
			<React.Fragment>{children}</React.Fragment>
		</RectButton>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingVertical: 10,
		paddingHorizontal: 20,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 100,
		alignSelf: "center",
		backgroundColor: colors.black_000,
	},
});
