import React from "react";

export interface ButtonIconProps {
	testID?: string;
	children: React.ReactNode;
	onPress: () => void;
	disabled?: boolean;
	marginT?: number;
	marginB?: number;
	marginR?: number;
	marginL?: number;
}

export type ButtonIconPlatformProps = ButtonIconProps;
