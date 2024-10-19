export type SchemeText = {
	weight: "regular" | "medium" | "bold";
	fontFamily: "Figtree-Regular" | "Figtree-Medium" | "Figtree-Bold";
	fontSize: "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";
};

export type IconProps = {
	color?: string;
	porcentSize?: string;
};

export type ButtonProps = {
	testID?: string;
	children: React.ReactNode | React.ReactNode[];
	onPress: () => void;
	disabled?: boolean;
	marginT?: number;
	marginB?: number;
	marginR?: number;
	marginL?: number;
};
