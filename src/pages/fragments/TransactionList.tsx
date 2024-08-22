import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { IconArrowDownLeft, IconArrowRight, IconArrowUpRight } from "@/assets";
import { SkeletonLoading } from "@/components/SkeletonLoading";
import { Text } from "@/components/Text";
import { borderRadius, colors, spaces, width } from "@/helpers/themes";
import { useFormatDate } from "@/hooks/useFormatDate";
import { useAppSettings } from "@/stores/useAppSettings";
import { useUserData } from "@/stores/useUserData";

export function TransactionList() {
	const { t } = useTranslation();
	const { data, status } = useUserData(state => state.transactions);
	const { isTablet } = useAppSettings();
	const navigation = useNavigation();

	if (status === "failed" || (status === "success" && data.length === 0)) return <React.Fragment />;

	return (
		<View testID="idTransactionList" style={styles.container}>
			<Text size="m" weight="medium" marginB={spaces.horizontal.xs}>
				{t("transactions")}
			</Text>

			{(status === "loading" || status === null) && (
				<SkeletonLoading
					heightPorcent="12%"
					radius={isTablet ? borderRadius.radius_15 : borderRadius.radius_10}
				/>
			)}

			<View
				style={[
					styles.transactionContainer,
					{ borderRadius: isTablet ? borderRadius.radius_15 : borderRadius.radius_10 },
				]}
			>
				{status === "success" &&
					data.map((item, index) => {
						if (item.transactionType === "zero-transfer") return;
						return (
							<TouchableOpacity
								testID={`id${index}`}
								key={index}
								style={styles.button}
								onPress={() => navigation.navigate("TransactionPage", { data: item })}
							>
								<View style={styles.iconStatus}>
									{item.transactionType === "incoming" && <IconArrowDownLeft porcentSize="4%" />}
									{item.transactionType === "outgoing" && <IconArrowUpRight porcentSize="4%" />}
								</View>
								<View
									style={[
										styles.item,
										{
											borderBottomColor:
												data.length != index + 1 ? colors.dark_cyan : colors.black_000,
										},
									]}
								>
									<View style={styles.row}>
										<View style={styles.labels}>
											<Text weight="bold">
												{useFormatDate(new Date(item.timestamp * 1000)).date}
											</Text>
											<Text weight="medium" color={colors.light_grey}>
												{useFormatDate(new Date(item.timestamp * 1000)).time}
											</Text>
										</View>
										<Text weight="bold">
											{item.transactionType === "incoming" ? "+ " : "- "} {item.amount} BTC
										</Text>
									</View>
									<IconArrowRight porcentSize={isTablet ? "2%" : "3%"} color={colors.dark_grey} />
								</View>
							</TouchableOpacity>
						);
					})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		maxWidth: width.max_width_800,
		alignSelf: "center",
		marginTop: spaces.vertical.m,
	},
	transactionContainer: {
		backgroundColor: colors.black_000,
	},
	button: {
		flex: 1,
		flexDirection: "row",
		paddingLeft: spaces.horizontal.s,
	},
	iconStatus: {
		width: 50,
		justifyContent: "center",
		alignItems: "center",
		marginRight: spaces.horizontal.s,
	},
	item: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		borderBottomWidth: 1,
		borderStyle: "solid",
		paddingVertical: spaces.vertical.m,
		paddingRight: spaces.horizontal.m,
	},
	row: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		paddingRight: spaces.horizontal.s,
	},
	labels: {
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-start",
	},
});
