import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { deviceCharacteristics } from "~/application/utils/deviceCharacteristics";
import { IconArrowLeft } from "~/presentation/assets";
import { ButtonIcon } from "~/presentation/components/ButtonIcon";
import { Text } from "~/presentation/components/Text";
import { colors, scaffold } from "~/presentation/settings/themes";

type Props = {
	title: string;
};

export function HeaderBack({ title }: Props) {
	const navigation = useNavigation();
	const { STATUS_BAR_HEIGHT } = deviceCharacteristics();

	const useHeightHeader = React.useMemo(() => hp("8%") + STATUS_BAR_HEIGHT, []);

	return (
		<View testID="idHeaderBack" style={[styles.container, { height: useHeightHeader }]}>
			<View style={styles.content}>
				<ButtonIcon onPress={() => navigation.goBack()}>
					<IconArrowLeft color={colors.light_cyan} porcentSize="4%" />
				</ButtonIcon>

				<View style={styles.title}>
					<Text size="xl" weight="medium">
						{title}
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: colors.black_100,
		justifyContent: "flex-end",
	},
	content: {
		position: "relative",
		width: "100%",
		height: hp("8%"),
		paddingHorizontal: scaffold.header_space_horizontal,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	title: {
		zIndex: -1,
		left: 0,
		right: 0,
		position: "absolute",
		alignItems: "center",
	},
});
