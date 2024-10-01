import React from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "~/presentation/settings/themes";

import { SkeletonLoading } from "./SkeletonLoading";
import { Text } from "./Text";

type Props = {
	title: string;
	subTitle: string;
	isLoading?: boolean;
	marginT?: number;
	marginB?: number;
};

export function TitleSubtitle({
	title,
	subTitle,
	isLoading = false,
	marginB = 0,
	marginT = 0,
}: Props) {
	return (
		<View testID="idTitleSubtitle" style={{ marginTop: marginT, marginBottom: marginB }}>
			<Text size="l" weight="medium">
				{title}
			</Text>
			{isLoading && (
				<View style={styles.loadingContainer}>
					<SkeletonLoading heightPorcent="4%" radius={5} />
				</View>
			)}
			{!isLoading && (
				<Text size="m" weight="medium" color={colors.light_grey}>
					{subTitle}
				</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	loadingContainer: {
		width: "50%",
	},
});
