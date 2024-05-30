import { fireEvent, render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';

import { mockedNavigation } from '../../../__test__/setup';
import { HeaderIcons } from '../fragments/HeaderIcons';

describe('HeaderIcons', () => {
	const configTest = {
		idChart: 'idChart',
		idSettings: 'idSettings',
	};

	test('Render component', () => {
		const t = renderHook(() => useTranslation());

		const { getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<HeaderIcons />
			</I18nextProvider>,
		);
		expect(getByTestId(configTest.idChart)).toBeTruthy();
		expect(getByTestId(configTest.idSettings)).toBeTruthy();
	});

	test('Chart action', () => {
		const t = renderHook(() => useTranslation());

		const { getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<HeaderIcons />
			</I18nextProvider>,
		);

		const chart = getByTestId(configTest.idChart);

		fireEvent.press(chart);
		expect(mockedNavigation.navigate).toHaveBeenCalled();
	});

	test('Settings action', () => {
		const t = renderHook(() => useTranslation());

		const { getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<HeaderIcons />
			</I18nextProvider>,
		);
		expect(getByTestId(configTest.idSettings)).toBeTruthy();

		const settings = getByTestId(configTest.idSettings);

		fireEvent.press(settings);
		expect(mockedNavigation.navigate).toHaveBeenCalled();
	});
});