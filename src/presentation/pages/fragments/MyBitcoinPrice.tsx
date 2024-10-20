import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { SkeletonLoading } from "~/presentation/components/SkeletonLoading";
import { Text } from "~/presentation/components/Text";
import { colors, spaces } from "~/presentation/settings/themes";

type Props = {
	price: string;
	balance: string;
	status: "loading" | "success" | "failed" | null;
};

export function MyBitcoinPrice({ price, balance, status }: Props) {
	const { t } = useTranslation();

	return (
		<View testID="idMyBitcoinPrice" style={styles.container}>
			{status !== "failed" && <Text weight="bold">{t("total-balance")}</Text>}

			{status === "success" && (
				<React.Fragment>
					<Text size="xxxl" weight="bold">
						{price}
					</Text>
					<Text weight="bold" color={colors.light_grey}>
						{balance} BTC
					</Text>
				</React.Fragment>
			)}

			{status === "failed" && <Text size="m">{t("request-error-try-later")}</Text>}

			{(status === "loading" || status === null) && (
				<React.Fragment>
					<SkeletonLoading
						heightPorcent="7%"
						widthPorcent="60%"
						radius={10}
						marginT={spaces.vertical.xs}
					/>
					<SkeletonLoading
						heightPorcent="3%"
						widthPorcent="30%"
						radius={10}
						marginT={spaces.vertical.xs}
					/>
				</React.Fragment>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		paddingVertical: hp("22%"),
	},
});
