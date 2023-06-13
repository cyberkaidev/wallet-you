import React from 'react';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import { HeaderSwiperOptions } from '@src/components';
import { I18nextProvider, useTranslation } from 'react-i18next';

describe('HeaderSwiperOptions', () => {
	const t = renderHook(() => useTranslation());

	const configTest = {
		title: 'Hello World',
		id: 'idHeaderSwiperOptions',
		idButtonRight: 'idButtonRight',
		idButtonLeft: 'idButtonLeft',
		onAction: jest.fn(),
	};

	test('Render component', () => {
		const { getByText, getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<HeaderSwiperOptions title={configTest.title} onAction={configTest.onAction} />
			</I18nextProvider>,
		);
		expect(getByTestId(configTest.id)).toBeTruthy();
		expect(getByText(configTest.title)).toBeTruthy();
		expect(getByText('Cancel')).toBeTruthy();
		expect(getByText('Change')).toBeTruthy();
	});

	test('Actions', () => {
		const { getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<HeaderSwiperOptions title={configTest.title} onAction={configTest.onAction} />
			</I18nextProvider>,
		);

		const idButtonRight = getByTestId(configTest.idButtonRight);
		fireEvent.press(idButtonRight);
		expect(configTest.onAction.mock.calls.length).toBe(1);

		const idButtonLeft = getByTestId(configTest.idButtonLeft);
		fireEvent.press(idButtonLeft);
		expect(configTest.onAction.mock.calls.length).toBe(1);
	});
});
