import { render, renderHook } from '@testing-library/react-native';
import React from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';

import { MyBitcoinPrice } from '../fragments/MyBitcoinPrice';

describe('MyBitcoinPrice', () => {
	const configTest = {
		id: 'idMyBitcoinPrice',
		idSkeleton: 'idSkeletonLoading',
		title: 'Total balance',
		price: '1',
		balance: '1',
	};

	test('Success render', () => {
		const t = renderHook(() => useTranslation());

		const { getByTestId, getByText, queryByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<MyBitcoinPrice price={configTest.price} balance={configTest.balance} status="success" />
			</I18nextProvider>,
		);
		expect(getByTestId(configTest.id)).toBeTruthy();
		expect(queryByTestId(configTest.idSkeleton)).not.toBeTruthy();

		expect(getByText(configTest.title)).toBeTruthy();
		expect(getByText(configTest.price)).toBeTruthy();
		expect(getByText(configTest.balance)).toBeTruthy();
	});

	test('Failed render', () => {
		const t = renderHook(() => useTranslation());

		const { getByTestId, getByText, queryByTestId, queryByText } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<MyBitcoinPrice price={configTest.price} balance={configTest.balance} status="failed" />
			</I18nextProvider>,
		);
		expect(getByTestId(configTest.id)).toBeTruthy();
		expect(queryByTestId(configTest.idSkeleton)).not.toBeTruthy();

		expect(getByText(configTest.title)).toBeTruthy();
		expect(queryByText(configTest.price)).not.toBeTruthy();
		expect(queryByText(configTest.balance)).not.toBeTruthy();
	});

	test('Loading render', () => {
		const t = renderHook(() => useTranslation());

		const { getByTestId, getByText, queryByText, getAllByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<MyBitcoinPrice price={configTest.price} balance={configTest.balance} status="loading" />
			</I18nextProvider>,
		);
		expect(getByTestId(configTest.id)).toBeTruthy();
		expect(getAllByTestId(configTest.idSkeleton)).toHaveLength(2);

		expect(getByText(configTest.title)).toBeTruthy();
		expect(queryByText(configTest.price)).not.toBeTruthy();
		expect(queryByText(configTest.balance)).not.toBeTruthy();
	});
});
