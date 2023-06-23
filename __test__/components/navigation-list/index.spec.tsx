import { act, render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';

import { NavigationList } from '@/components';

describe('NavigationList', () => {
	const t = renderHook(() => useTranslation());
	const configTest = {
		idNavigationList: 'idNavigationList',
		idPublicKey: 'idPublicKey',
		idLanguage: 'idLanguage',
		idCurrency: 'idCurrency',
		idTerms: 'idTerms',
		idSupportUs: 'idSupportUs',
		idExit: 'idExit',
	};

	test('Render component', () => {
		const { getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<NavigationList />
			</I18nextProvider>,
		);

		expect(getByTestId(configTest.idNavigationList)).toBeTruthy();
		expect(getByTestId(configTest.idPublicKey)).toBeTruthy();
		expect(getByTestId(configTest.idLanguage)).toBeTruthy();
		expect(getByTestId(configTest.idCurrency)).toBeTruthy();
		expect(getByTestId(configTest.idTerms)).toBeTruthy();
		expect(getByTestId(configTest.idSupportUs)).toBeTruthy();
		expect(getByTestId(configTest.idExit)).toBeTruthy();
	});

	test('Actions', () => {
		const { getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<NavigationList />
			</I18nextProvider>,
		);

		act(() => expect(getByTestId(configTest.idPublicKey)).toBeTruthy());
		act(() => expect(getByTestId(configTest.idLanguage)).toBeTruthy());
		act(() => expect(getByTestId(configTest.idCurrency)).toBeTruthy());
		act(() => expect(getByTestId(configTest.idTerms)).toBeTruthy());
		act(() => expect(getByTestId(configTest.idSupportUs)).toBeTruthy());
		act(() => expect(getByTestId(configTest.idExit)).toBeTruthy());
	});
});
