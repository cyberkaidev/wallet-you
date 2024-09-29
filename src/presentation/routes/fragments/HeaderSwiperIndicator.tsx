import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { ButtonTitleGhost } from "~/presentation/components/ButtonTitleGhost";
import { Text } from "~/presentation/components/Text";
import { borderRadius, colors, scaffold, spaces } from "~/presentation/settings/themes";

type Props = {
	title: string;
};

export function HeaderSwiperIndicator({ title }: Props) {
	const navigation = useNavigation();
	const { t } = useTranslation();

	return (
		<View testID="idHeaderSwiperIndicator" style={styles.container}>
			<View style={styles.indicator} />
			<View style={styles.content}>
				<View style={styles.title}>
					<Text size="xl" weight="medium">
						{title}
					</Text>
				</View>
				<ButtonTitleGhost
					testID="idButtonLeft"
					title={t("back")}
					size="small"
					buttonsWeight="medium"
					onPress={() => navigation.goBack()}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black_100,
		paddingVertical: spaces.vertical.xs,
		alignItems: "center",
		width: "100%",
	},
	title: {
		position: "absolute",
		alignItems: "center",
		left: 0,
		right: 0,
	},
	indicator: {
		width: wp("10%"),
		height: hp("0.6%"),
		borderRadius: borderRadius.radius_10,
		marginBottom: spaces.vertical.xs,
		backgroundColor: colors.dark_grey,
	},
	content: {
		width: "100%",
		paddingHorizontal: scaffold.header_space_horizontal,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		position: "relative",
	},
});
