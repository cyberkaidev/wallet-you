import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { colors, spaces } from "~/presentation/settings/themes";
import { ButtonIconProps } from "~/shared/Styles";

export function ButtonIconPlatform({
	testID = "idButtonIcon",
	children,
	onPress,
	disabled = false,
	marginT,
	marginB,
	marginR,
	marginL,
}: ButtonIconProps) {
	return (
		<RectButton
			testID={testID}
			onPress={onPress}
			hitSlop={20}
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
			{children}
		</RectButton>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 100,
		padding: spaces.horizontal.xs,
	},
});
