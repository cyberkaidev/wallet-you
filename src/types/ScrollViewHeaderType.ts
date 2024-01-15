export interface ScrollViewHeaderProps {
	headerTitle: string;
	children: React.ReactNode | React.ReactNode[];
	enabledHorizontalPadding?: boolean;
	refreshControl?: () => Promise<boolean> | boolean;
}
