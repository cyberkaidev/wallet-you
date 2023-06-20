import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

export interface ScrollViewHeaderPageProps {
	children: React.ReactNode | React.ReactNode[];
	enabledHorizontalPadding?: boolean;
	enabledPaddingB?: boolean;
	refreshControl?: () => Promise<boolean> | boolean;
	onScrollY?: (arg: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

export interface ScrollViewHeaderPageContainerProps {
	horizontalPadding: string;
}
