import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { colors } from "~/presentation/settings/themes";
import { ButtonTitleGhostProps } from "~/shared/Styles";

export function ButtonTitleGhostPlatform({
	testID,
	children,
	disabled = false,
	onPress,
	marginT = 0,
	marginB = 0,
	marginR = 0,
	marginL = 0,
}: ButtonTitleGhostProps) {
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
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 100,
		alignSelf: "center",
	},
});
