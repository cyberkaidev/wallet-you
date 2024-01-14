export interface AlertModalProps {
	title: string;
	visible: boolean;
	onCancel: () => void;
	onConfirm: () => void;
}
