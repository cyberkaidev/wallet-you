export interface ButtonTitleShapeProps {
	title: string;
	onPress: () => void;
	disabled?: boolean;
	size?: 'large' | 'small';
	loading?: boolean;
	marginT?: string;
	marginB?: string;
	marginR?: string;
	marginL?: string;
}

export interface ButtonTitleShapeContainerProps {
	isOpacity: boolean;
	width: string;
	paddingV: string;
	paddingH: string;
	borderR: string;
	marginT: string;
	marginB: string;
	marginR: string;
	marginL: string;
}
