export interface ScrollViewPageProps {
	children: React.ReactNode | React.ReactNode[];
	enabledHorizontalPadding?: boolean;
	enabledPaddingB?: boolean;
	contentHeight?: string;
	refreshControl?: () => Promise<boolean> | boolean;
}

export interface ScrollViewPageContainerProps {
	horizontalPadding: string;
}

export interface SafeAreaProps {
	height: string;
	paddingB: string;
}
