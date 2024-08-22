interface Data<T> {
	title: string;
	key: T;
}

export interface SelectListProps<T> {
	data: Data<T>[];
	selected: string;
	onSelected: (arg: Data<T>["key"]) => void;
}
