import { TextProps } from '../text/types';

export interface ButtonTitleGhostProps {
	testID?: string;
	title: string;
	onPress: () => void;
	disabled?: boolean;
	size?: 'large' | 'small';
	buttonsWeight?: TextProps['weight'];
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
