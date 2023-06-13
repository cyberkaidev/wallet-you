export interface SelectListProps {
	data: { title: string; ref: string }[];
	selected: string;
	onSelected: (arg: string) => void;
}
