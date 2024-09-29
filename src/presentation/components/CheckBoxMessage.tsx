import Checkbox from "expo-checkbox";
import React from "react";
import { StyleSheet, View } from "react-native";

import { colors, spaces } from "../settings/themes";
import { Text } from "./Text";

type Props = {
	message: string;
	isActivated: boolean;
	onAction: () => void;
};

export function CheckBoxMessage({ isActivated, onAction, message }: Props) {
	return (
		<View style={styles.container}>
			<Checkbox
				testID="idCheckBoxMessage"
				style={styles.button}
				hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
				value={isActivated}
				onValueChange={onAction}
				color={colors.light_cyan}
			/>
			<Text marginL={spaces.horizontal.xs} size="m" weight="medium">
				{message}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: spaces.vertical.s,
	},
	button: {
		width: 18,
		height: 18,
	},
});
