export interface ButtonTitleShapeProps {
	testID?: string;
	title: string;
	onPress: () => void;
	disabled?: boolean;
	size?: "large" | "small";
	loading?: boolean;
	marginT?: number;
	marginB?: number;
	marginR?: number;
	marginL?: number;
}

export interface ButtonTitleShapePlatformProps {
	testID?: string;
	children: React.ReactNode | React.ReactNode[];
	onPress: () => void;
	size?: "large" | "small";
	disabled?: boolean;
	marginT?: number;
	marginB?: number;
	marginR?: number;
	marginL?: number;
}
