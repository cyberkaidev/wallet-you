import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';

import { AlertModal } from '@/components';

describe('AlertModal', () => {
	const configTest = {
		title: 'Hello World',
		idModal: 'idModal',
		idAlertContainer: 'idAlertContainer',
		idCancel: 'idCancel',
		idConfirm: 'idConfirm',
		loading: 'Loading',
		onCancel: jest.fn(),
		onConfirm: jest.fn(),
	};

	test('Render component - visible', () => {
		const t = renderHook(() => useTranslation());

		const { getByText, getByTestId, queryByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<AlertModal
					title={configTest.title}
					visible={true}
					onCancel={configTest.onCancel}
					onConfirm={configTest.onConfirm}
				/>
			</I18nextProvider>,
		);

		expect(getByText(configTest.title)).toBeTruthy();
		expect(queryByTestId(configTest.idModal)).toBeTruthy();
		expect(getByTestId(configTest.idAlertContainer)).toBeTruthy();
		expect(getByTestId(configTest.idCancel)).toBeTruthy();
		expect(getByTestId(configTest.idConfirm)).toBeTruthy();
	});

	test('Render component - not visible', () => {
		const t = renderHook(() => useTranslation());

		const { queryByTestId, getByTestId, queryByText } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<AlertModal
					title={configTest.title}
					visible={false}
					onCancel={configTest.onCancel}
					onConfirm={configTest.onConfirm}
				/>
			</I18nextProvider>,
		);

		expect(getByTestId(configTest.idModal)).toBeTruthy();
		expect(queryByText(configTest.title)).toBeNull();
		expect(queryByTestId(configTest.idAlertContainer)).toBeNull();
		expect(queryByTestId(configTest.idCancel)).toBeNull();
		expect(queryByTestId(configTest.idConfirm)).toBeNull();
	});

	test('Actions', () => {
		const t = renderHook(() => useTranslation());

		const { getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<AlertModal
					title={configTest.title}
					visible={true}
					onCancel={configTest.onCancel}
					onConfirm={configTest.onConfirm}
				/>
			</I18nextProvider>,
		);

		const buttonCancel = getByTestId(configTest.idCancel);
		const buttonConfirm = getByTestId(configTest.idConfirm);

		fireEvent.press(buttonCancel);
		expect(configTest.onCancel.mock.calls.length).toBe(1);

		fireEvent.press(buttonConfirm);
		expect(configTest.onConfirm.mock.calls.length).toBe(1);
	});
});
