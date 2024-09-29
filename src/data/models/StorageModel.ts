export type SetItemModel = Promise<void>;

export type GetItemModel = Promise<string | null>;

export type SetItemProps = {
	key: string;
	item: string;
};

export type GetItemProps = {
	key: string;
};

export interface StorageModel {
	setItem: (args: SetItemProps) => SetItemModel;
	getItem: (args: GetItemProps) => GetItemModel;
}
