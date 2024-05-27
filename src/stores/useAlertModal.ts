import { create } from 'zustand';

import { UseModalAlertProps } from '@/types/UseModalAlertType';

export const useAlertModal = create<UseModalAlertProps>(set => ({
	visible: false,
	title: '',
	onCancel: undefined,
	onConfirm: undefined,
	showAlert: props => set({ ...props, visible: true }),
	hideAlert: () => set({ visible: false, title: '', onCancel: undefined, onConfirm: undefined }),
}));
