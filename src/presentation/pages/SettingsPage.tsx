import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import React from "react";
import { useTranslation } from "react-i18next";
import { Linking } from "react-native";

import { storageKeys } from "~/application/constants/storageKeys";
import { initializeAppSettings } from "~/application/settings/initializeAppSettings";
import { useAlertModal } from "~/application/stores/useAlertModal";
import { useUser } from "~/application/stores/useUser";
import { ScrollView } from "~/presentation/components/ScrollView";
import { Text } from "~/presentation/components/Text";

import { ActionList } from "../components/ActionList";
import { LimitedWidthContainer } from "../components/LimitedWidthContainer";
import { colors, spaces } from "../settings/themes";

export function SettingsPage() {
	const { t } = useTranslation();
	const { key, cleanUserData } = useUser();
	const { showAlert } = useAlertModal();
	const navigation = useNavigation();

	const { currency, enableLocalAuth, language, publicKey } = storageKeys;

	async function onExit() {
		await AsyncStorage.multiRemove([currency, enableLocalAuth, language]);
		await SecureStore.deleteItemAsync(publicKey);
		initializeAppSettings();
		cleanUserData();

		navigation.reset({
			index: 0,
			routes: [{ name: "LocalAuthPage" }],
		});
	}

	const firstList = [
		{
			testID: "idCopy",
			title: t("copy-my-address"),
			onAction: async () => await Clipboard.setStringAsync(key),
		},
	];

	const secondList = [
		{
			testID: "idLanguage",
			title: t("language"),
			onAction: () => navigation.navigate("LanguagePage"),
			arrowVisible: true,
		},
		{
			testID: "idCurrency",
			title: t("currency"),
			onAction: () => navigation.navigate("CurrencyPage"),
			arrowVisible: true,
		},
		{
			testID: "idTerms",
			title: t("terms"),
			onAction: () => navigation.navigate("TermsPage"),
			arrowVisible: true,
		},
		{
			testID: "idSourceCode",
			title: t("source-code"),
			onAction: () => Linking.openURL("https://github.com/cyberkaidev/wallet-you"),
			arrowVisible: true,
		},
		{
			testID: "idExit",
			title: t("exit"),
			onAction: () => {
				showAlert({ title: t("do-you-really-want-to-leave"), onConfirm: () => onExit() });
			},
			arrowVisible: true,
		},
	];

	return (
		<ScrollView>
			<LimitedWidthContainer>
				<ActionList list={firstList} />
				<Text
					size="xs"
					color={colors.light_grey}
					marginT={spaces.vertical.xs}
					marginL={spaces.horizontal.s}
					marginB={spaces.vertical.m}
				>
					{key}
				</Text>
				<ActionList list={secondList} />
				<Text marginT={spaces.vertical.s}>
					v {Constants.expoConfig?.version != null ? Constants.expoConfig.version : "-"}
				</Text>
			</LimitedWidthContainer>
		</ScrollView>
	);
}
