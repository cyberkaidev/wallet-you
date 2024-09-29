import React from "react";
import { Text as TextContainer } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { colors } from "~/presentation/settings/themes";
import { SchemeText } from "~/shared/Styles";

import { textUtils } from "../settings/textUtils";

type Props = {
	children: React.ReactNode;
	weight?: "regular" | "medium" | "bold";
	size?: SchemeText["fontSize"];
	color?: string;
	marginT?: number;
	marginB?: number;
	marginR?: number;
	marginL?: number;
};

export function Text({
	children,
	weight,
	size,
	color = colors.white,
	marginT = 0,
	marginB = 0,
	marginR = 0,
	marginL = 0,
}: Props) {
	const { onFontFamily, onFontSize } = React.useMemo(() => {
		return textUtils({
			weight: weight ?? "regular",
			size: size ?? "s",
		});
	}, [weight, size]);

	return (
		<TextContainer
			testID="idText"
			style={{
				fontSize: wp(onFontSize()),
				fontFamily: onFontFamily(),
				color: color,
				marginTop: marginT,
				marginBottom: marginB,
				marginRight: marginR,
				marginLeft: marginL,
			}}
		>
			{children}
		</TextContainer>
	);
}
