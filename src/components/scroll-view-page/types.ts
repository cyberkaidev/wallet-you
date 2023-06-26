export interface ScrollViewPageProps {
	children: React.ReactNode | React.ReactNode[];
	refreshControl?: () => Promise<boolean> | boolean;
}
