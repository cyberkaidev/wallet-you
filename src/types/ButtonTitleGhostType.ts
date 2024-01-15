import { SchemeTextProps } from './SchemeTextType';

export interface ButtonTitleGhostProps {
	testID?: string;
	title: string;
	onPress: () => void;
	disabled?: boolean;
	size?: 'large' | 'small';
	buttonsWeight?: SchemeTextProps['weight'];
	loading?: boolean;
	marginT?: number;
	marginB?: number;
	marginR?: number;
	marginL?: number;
}
