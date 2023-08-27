import { render } from '@testing-library/react-native';
import React from 'react';

import { ChartBitcoin } from '@/components';

test('Render component with success', () => {
	const configTest = {
		idChartBitcoin: 'idChartBitcoin',
		idChart: 'idChart',
	};

	const { getByTestId } = render(<ChartBitcoin />);
	expect(getByTestId(configTest.idChartBitcoin)).toBeTruthy();
	expect(getByTestId(configTest.idChart)).toBeTruthy();
});
