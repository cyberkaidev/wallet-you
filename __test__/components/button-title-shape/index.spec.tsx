import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';

import { ButtonTitleShape } from '@/components';

describe('ButtonTitleShape', () => {
	const configTest = {
		title: 'Hello World',
		id: 'idButtonTitleShape',
		loading: 'Loading',
	};

	test('Render component and onPress', () => {
		const t = renderHook(() => useTranslation());
		const configItem = {
			onPress: jest.fn(),
		};

		const { getByText, getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<ButtonTitleShape title={configTest.title} onPress={configItem.onPress} />
			</I18nextProvider>,
		);

		expect(getByText(configTest.title)).toBeTruthy();
		const button = getByTestId(configTest.id);

		fireEvent.press(button);
		expect(configItem.onPress.mock.calls.length).toBe(1);
	});

	test('Disabled', async () => {
		const t = renderHook(() => useTranslation());
		const configItem = {
			onPress: jest.fn(),
		};

		const { getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<ButtonTitleShape title={configTest.title} disabled onPress={configItem.onPress} />
			</I18nextProvider>,
		);
		const button = getByTestId(configTest.id);

		fireEvent.press(button);
		expect(configItem.onPress).not.toBeCalled();
	});

	test('Loading', async () => {
		const t = renderHook(() => useTranslation());
		const configItem = {
			onPress: jest.fn(),
		};

		const { getByText, getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<ButtonTitleShape title={configTest.title} loading onPress={configItem.onPress} />
			</I18nextProvider>,
		);

		expect(getByText(configTest.loading)).toBeTruthy();

		const button = getByTestId(configTest.id);

		fireEvent.press(button);
		expect(configItem.onPress).not.toBeCalled();
	});
});
