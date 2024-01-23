export interface ScrollViewProps {
	children: React.ReactNode | React.ReactNode[];
	enabledHorizontalPadding?: boolean;
	refreshControl?: () => Promise<boolean> | boolean;
}
