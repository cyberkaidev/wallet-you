import { render } from '@testing-library/react-native';
import React from 'react';

import { ChartKit } from '../ChartKit';

test('Render component with success', () => {
	const configTest = {
		idChartKit: 'idChartKit',
		idChart: 'idChart',
	};

	const { getByTestId } = render(<ChartKit />);
	expect(getByTestId(configTest.idChartKit)).toBeTruthy();
	expect(getByTestId(configTest.idChart)).toBeTruthy();
});
