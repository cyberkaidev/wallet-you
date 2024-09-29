import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";

import { deviceCharacteristics } from "~/application/utils/deviceCharacteristics";
import { IconSettings } from "~/presentation/assets";
import { ButtonIcon } from "~/presentation/components/ButtonIcon";
import { Text } from "~/presentation/components/Text";
import { colors } from "~/presentation/settings/themes";

export function HeaderIcons() {
	const navigation = useNavigation();
	const { t } = useTranslation();

	return (
		<View style={styles.container}>
			<View style={styles.center}>
				<Text size="xl" weight="medium">
					{t("my-wallet")}
				</Text>
			</View>
			<ButtonIcon testID="idSettings" onPress={() => navigation.navigate("SettingsPage")}>
				<IconSettings color={colors.light_cyan} />
			</ButtonIcon>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "relative",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		marginTop: deviceCharacteristics().STATUS_BAR_HEIGHT,
	},
	center: {
		position: "absolute",
		alignItems: "center",
		left: 0,
		right: 0,
	},
});
