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
import { Text } from "~/presentation/components/Text";

import { CheckBoxMessage } from "../components/CheckBoxMessage";
import { FilledButton } from "../components/FilledButton";
import { ScrollView } from "../components/ScrollView";
import { colors, spaces, width } from "../settings/themes";
import { TextFieldPaste } from "./fragments/TextFieldPaste";

export function RegisterKeyPage() {
	const { t } = useTranslation();
	const { fetchTransactions, setKey, setBalance } = useUser();
	const { fetchBitcoinDataPrices } = useBitcoinPrices();
	const navigation = useNavigation();

	const [showBiometricOption, setShowBiometricOption] = React.useState(false);
	const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [inputPublicKey, setInputPublicKey] = React.useState("");
	const [error, setError] = React.useState({ message: "", visible: false });

	React.useLayoutEffect(() => {
		(async () => {
			const compatible = await LocalAuthentication.hasHardwareAsync();
			const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
			setShowBiometricOption(compatible && isBiometricEnrolled);
		})();
	}, []);

	async function handlerContinue() {
		setLoading(true);
		if (error.visible) setError({ message: "", visible: false });
		const { body, statusCode } = await getUserBalance(inputPublicKey);

		if (statusCode === 404) {
			setError({ message: t("public-key-not-found"), visible: true });
			setLoading(false);
			return;
		}

		if (!body || statusCode !== 200) {
			setError({ message: t("request-error-try-later"), visible: true });
			setLoading(false);
			return;
		}
		fetchTransactions(inputPublicKey);
		fetchBitcoinDataPrices();

		if (toggleCheckBox) {
			await localStorage().setItem({ key: storageKeys.enableLocalAuth, item: "on" });
		}
		await encryptStorage().setItem({ key: storageKeys.publicKey, item: inputPublicKey });
		setKey(inputPublicKey);
		setBalance(body.balance);

		navigation.reset({
			index: 0,
			routes: [{ name: "HomePage" }],
		});
	}

	return (
		<ScrollView>
			<TextFieldPaste value={inputPublicKey} onChangeText={setInputPublicKey} />
			{error.visible && (
				<View style={styles.textErrorContainer}>
					<Text weight="medium" marginT={spaces.vertical.xs} color={colors.red}>
						{error.message}
					</Text>
				</View>
			)}
			{showBiometricOption && (
				<CheckBoxMessage
					isActivated={toggleCheckBox}
					onAction={() => setToggleCheckBox(!toggleCheckBox)}
					message={t("use-biometrics-optional")}
				/>
			)}
			<FilledButton
				title={t("continue")}
				onPress={handlerContinue}
				size="large"
				loading={loading}
				disabled={inputPublicKey.length < 1}
				marginT={spaces.vertical.l}
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	textErrorContainer: {
		width: "100%",
		maxWidth: width.max_width_800,
		alignSelf: "center",
	},
});
