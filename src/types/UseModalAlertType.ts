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

export interface UseModalAlertProps extends DataProps {
	showAlert: (arg: ShowAlertProps) => void;
	hideAlert: () => void;
}
