import React from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator } from "react-native";

import { useAppSettings } from "~/application/stores/useAppSettings";
import { SchemeText } from "~/shared/Styles";

import { colors, spaces } from "../settings/themes";
import { ButtonTitleGhostPlatform } from "./fragments/ButtonTitleGhostPlatform";
import { Text } from "./Text";

type Props = {
	testID?: string;
	title: string;
	onPress: () => void;
	disabled?: boolean;
	size?: "large" | "small";
	buttonsWeight?: SchemeText["weight"];
	loading?: boolean;
	marginT?: number;
	marginB?: number;
	marginR?: number;
	marginL?: number;
};

export function ButtonTitleGhost({
	testID = "idButtonTitleGhost",
	title,
	disabled = false,
	onPress,
	size = "large",
	loading = false,
	buttonsWeight = "bold",
	marginT = 0,
	marginB = 0,
	marginR = 0,
	marginL = 0,
}: Props) {
	const { t } = useTranslation();
	const { isTablet } = useAppSettings();

	return (
		<ButtonTitleGhostPlatform
			testID={testID}
			onPress={onPress}
			disabled={disabled || loading}
			marginT={marginT}
			marginB={marginB}
			marginR={marginR}
			marginL={marginL}
		>
			{!loading && (
				<Text size={size === "large" ? "l" : "m"} weight={buttonsWeight} color={colors.light_cyan}>
					{title}
				</Text>
			)}
			{loading && (
				<React.Fragment>
					<ActivityIndicator color={colors.light_cyan} size={isTablet ? "large" : "small"} />
					<Text
						size={size === "large" ? "l" : "m"}
						marginL={spaces.horizontal.xs}
						weight={buttonsWeight}
						color={colors.light_cyan}
					>
						{t("loading")}
					</Text>
				</React.Fragment>
			)}
		</ButtonTitleGhostPlatform>
	);
}
