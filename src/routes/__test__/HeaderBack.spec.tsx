import { render } from '@testing-library/react-native';
import React from 'react';

import { HeaderBack } from '../fragments/HeaderBack';

test('Render component', () => {
	const configTest = {
		title: 'Hello World',
		id: 'idHeaderBack',
	};

	const { getByText, getByTestId } = render(<HeaderBack title={configTest.title} />);

	expect(getByText(configTest.title)).toBeTruthy();
	expect(getByTestId(configTest.id)).toBeTruthy();
});
