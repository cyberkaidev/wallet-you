import { create } from "zustand";

interface DataProps {
	visible: boolean;
	title: string;
	onCancel?: () => void;
	onConfirm?: () => void;
}

interface ShowAlertProps {
	title: string;
	onCancel?: () => void;
	onConfirm: () => void;
}

interface Props extends DataProps {
	showAlert: (arg: ShowAlertProps) => void;
	hideAlert: () => void;
}

export const useAlertModal = create<Props>(set => ({
	visible: false,
	title: "",
	onCancel: undefined,
	onConfirm: undefined,
	showAlert: props => set({ ...props, visible: true }),
	hideAlert: () => set({ visible: false, title: "", onCancel: undefined, onConfirm: undefined }),
}));
