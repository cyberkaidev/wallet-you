import React from "react";
import { StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { deviceCharacteristics } from "~/application/utils/deviceCharacteristics";
import { Text } from "~/presentation/components/Text";
import { colors, scaffold } from "~/presentation/settings/themes";

type Props = {
	title: string;
};

export function HeaderTitle({ title }: Props) {
	const { STATUS_BAR_HEIGHT } = deviceCharacteristics();

	const useHeightHeader = React.useMemo(() => hp("8%") + STATUS_BAR_HEIGHT, []);

	return (
		<View testID="idHeaderTitle" style={[styles.container, { height: useHeightHeader }]}>
			<View style={styles.content}>
				<Text size="xl" weight="medium">
					{title}
				</Text>
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
		width: "100%",
		height: hp("8%"),
		paddingHorizontal: scaffold.header_space_horizontal,
		justifyContent: "center",
		alignItems: "center",
	},
});
