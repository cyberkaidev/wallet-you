export interface ActionListProps {
	list: {
		testID: string;
		title: string;
		onAction: () => void;
	}[];
}
