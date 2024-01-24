export interface ActionListProps {
	list: {
		testID: string;
		prefixIcon?: JSX.Element;
		title: string;
		onAction: () => void;
		arrowVisible?: boolean;
	}[];
	marginB?: number;
}
