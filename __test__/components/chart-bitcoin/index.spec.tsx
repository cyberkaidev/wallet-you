import React from 'react';
import { ChartBitcoin } from '@src/components';
import { render } from '@testing-library/react-native';

test('Render component with success', () => {
	const configTest = {
		idChartBitcoin: 'idChartBitcoin',
		idChart: 'idChart',
	};

	const { getByTestId } = render(<ChartBitcoin />);
	expect(getByTestId(configTest.idChartBitcoin)).toBeTruthy();
	expect(getByTestId(configTest.idChart)).toBeTruthy();
});
