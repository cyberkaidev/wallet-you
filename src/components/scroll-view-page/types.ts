export interface ScrollViewPageProps {
	children: React.ReactNode | React.ReactNode[];
	enabledHorizontalPadding?: boolean;
	enabledPaddingB?: boolean;
	contentHeight?: string;
}

export interface ScrollViewPageContainerProps {
	horizontalPadding: string;
}

export interface SafeAreaProps {
	height: string;
	paddingB: string;
}
