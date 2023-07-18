export interface ScrollViewProps {
	children: React.ReactNode | React.ReactNode[];
	refreshControl?: () => Promise<boolean> | boolean;
}
