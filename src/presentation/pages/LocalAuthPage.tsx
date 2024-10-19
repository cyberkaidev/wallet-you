import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from "expo-local-authentication";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";

import { getUserBalance } from "~/application/api/getUserBalance";
import { storageKeys } from "~/application/constants/storageKeys";
import { useBitcoinPrices } from "~/application/stores/useBitcoinPrices";
import { useUser } from "~/application/stores/useUser";
import { encryptStorage } from "~/application/utils/encryptStorage";
import { localStorage } from "~/application/utils/localStorage";
import { colors } from "~/presentation/settings/themes";
import { RootStackParamListProps } from "~/shared/Navigation";

import { FilledButton } from "../components/FilledButton";

export function LocalAuthPage() {
	const navigation = useNavigation();
	const { fetchTransactions, setKey, setBalance } = useUser();
	const { fetchBitcoinDataPrices } = useBitcoinPrices();
	const { t } = useTranslation();

	const [loading, setLoading] = React.useState(false);

	async function resetRoute(navigate: keyof RootStackParamListProps) {
		if (navigate === "HomePage") {
			const publicKey = await encryptStorage().getItem({ key: storageKeys.publicKey });
			const resBalance = await getUserBalance(publicKey as string);

			if (resBalance.statusCode !== 200 || !resBalance.body) {
				return navigation.reset({
					index: 0,
					routes: [{ name: "RegisterKeyPage" }],
				});
			}

			setBalance(resBalance.body?.balance);

			fetchBitcoinDataPrices();
			fetchTransactions(publicKey as string);
		}

		navigation.reset({
			index: 0,
			routes: [{ name: navigate }],
		});
	}

	async function authenticate() {
		setLoading(true);

		const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
		const userEnabledAuth = await localStorage().getItem({ key: storageKeys.enableLocalAuth });

		if (!isBiometricEnrolled || !userEnabledAuth || userEnabledAuth === "off") {
			resetRoute("HomePage");
		} else {
			const results = await LocalAuthentication.authenticateAsync();
			if (results.success) resetRoute("HomePage");
			if (!results.success) setLoading(false);
		}
	}

	async function publicKeyCheck() {
		const publicKey = await encryptStorage().getItem({ key: storageKeys.publicKey });
		if (!publicKey) {
			resetRoute("RegisterKeyPage");
		} else {
			setKey(publicKey);
			authenticate();
		}
	}

	React.useEffect(() => {
		publicKeyCheck();
	}, []);

	return (
		<View style={styles.container}>
			<FilledButton title={t("unlock")} onPress={authenticate} loading={loading} size="small" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.black_100,
		alignItems: "center",
		justifyContent: "center",
	},
});
