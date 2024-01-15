export interface ButtonTitleShapeProps {
	title: string;
	onPress: () => void;
	disabled?: boolean;
	size?: 'large' | 'small';
	loading?: boolean;
	marginT?: number;
	marginB?: number;
	marginR?: number;
	marginL?: number;
}
