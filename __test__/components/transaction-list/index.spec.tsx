import React from 'react';
import { TransactionList } from '@src/components';
import { act, render } from '@testing-library/react-native';

test('Render component and action', () => {
	const configTest = {
		idTransactionList: 'idTransactionList',
		idButton: 'id0',
		date: '12/12/2023',
		time: '12:00 PM',
		price: '$100.00',
	};

	const { getByTestId, getAllByText } = render(<TransactionList />);

	expect(getByTestId(configTest.idTransactionList)).toBeTruthy();
	expect(getAllByText(configTest.date)).toBeTruthy();
	expect(getAllByText(configTest.time)).toBeTruthy();
	expect(getAllByText(configTest.price)).toBeTruthy();

	act(() => expect(getByTestId(configTest.idButton)).toBeTruthy());
});
