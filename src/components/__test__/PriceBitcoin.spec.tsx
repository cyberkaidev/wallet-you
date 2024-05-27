import { render } from '@testing-library/react-native';
import React from 'react';

import { PriceBitcoin } from '../PriceBitcoin';

describe('PriceBitcoin', () => {
	const configTest = {
		title: 'Hello World',
		price: '$ 100.00',
		bitcoin: '0.0000013',
		id: 'idPriceBitcoin',
		idSkeleton: 'idSkeletonLoading',
	};

	test('Render component without load', () => {
		const { getByText, getByTestId } = render(
			<PriceBitcoin
				title={configTest.title}
				price={configTest.price}
				bitcoin={configTest.bitcoin}
				status="success"
			/>,
		);

		expect(getByTestId(configTest.id)).toBeTruthy();
		expect(getByText(configTest.title)).toBeTruthy();
		expect(getByText(configTest.price)).toBeTruthy();
		expect(getByText(configTest.bitcoin + ' BTC')).toBeTruthy();
	});

	test('Render component with load', () => {
		const { getByTestId } = render(
			<PriceBitcoin
				title={configTest.title}
				price={configTest.price}
				bitcoin={configTest.bitcoin}
				status="loading"
			/>,
		);

		expect(getByTestId(configTest.id)).toBeTruthy();
		expect(getByTestId(configTest.idSkeleton)).toBeTruthy();
	});
});
