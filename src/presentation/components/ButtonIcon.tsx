import React from "react";

import { ButtonProps } from "~/shared/Styles";

import { ButtonIconPlatform } from "./fragments/ButtonIconPlatform";

export function ButtonIcon({
	testID = "idButtonIcon",
	children,
	onPress,
	disabled = false,
	marginT,
	marginB,
	marginR,
	marginL,
}: ButtonProps) {
	return (
		<ButtonIconPlatform
			testID={testID}
			onPress={onPress}
			disabled={disabled}
			marginT={marginT}
			marginB={marginB}
			marginR={marginR}
			marginL={marginL}
		>
			{children}
		</ButtonIconPlatform>
	);
}
