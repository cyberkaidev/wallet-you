export interface ButtonTitleGhostProps {
	testID?: string;
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

export interface ButtonTitleGhostContainerProps {
	isOpacity: boolean;
	marginT: string;
	marginB: string;
	marginR: string;
	marginL: string;
}
