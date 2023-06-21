export interface ScrollViewHeaderPageProps {
	headerTitle: string;
	children: React.ReactNode | React.ReactNode[];
	enabledHorizontalPadding?: boolean;
	refreshControl?: () => Promise<boolean> | boolean;
}

export interface ScrollViewHeaderPageContainerProps {
	horizontalPadding: string;
}
