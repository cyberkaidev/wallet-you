import React from "react";
import { StyleSheet, View } from "react-native";

import { width } from "../settings/themes";

type Props = {
	children: React.ReactNode | React.ReactNode[];
};

export function LimitedWidthContainer({ children }: Props) {
	return (
		<View testID="idLimitedWidth" style={styles.container}>
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		maxWidth: width.max_width_800,
		width: "100%",
		alignSelf: "center",
	},
});
