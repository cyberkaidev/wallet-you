import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { colors, spaces } from "@/helpers/themes";
import { SelectListProps } from "@/types/SelectListType";

import { Text } from "./Text";

export function SelectList<T>({ data, selected, onSelected }: SelectListProps<T>) {
	return (
		<View testID="idSelectList">
			{data.map((item, index) => (
				<TouchableOpacity
					key={index}
					testID={`id${index}`}
					style={styles.button}
					onPress={() => onSelected(item.key)}
				>
					<View style={styles.border}>
						{selected === item.key && <View style={styles.circle} />}
					</View>
					<Text size="m" weight="medium" marginL={spaces.horizontal.s}>
						{item.title}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		paddingVertical: spaces.vertical.s,
		flexDirection: "row",
		alignItems: "center",
	},
	border: {
		width: wp("4%"),
		height: wp("4%"),
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 40,
		borderStyle: "solid",
		borderWidth: 2,
		borderColor: colors.light_cyan,
	},
	circle: {
		width: wp("2%"),
		height: wp("2%"),
		borderRadius: 20,
		backgroundColor: colors.light_cyan,
	},
});
