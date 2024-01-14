import { render } from '@testing-library/react-native';
import React from 'react';

import { Text } from '../Text';

test('Render component', () => {
	const configTest = {
		title: 'Hello World',
		id: 'idText',
	};

	const { getByText, getByTestId } = render(<Text>{configTest.title}</Text>);

	expect(getByText(configTest.title)).toBeTruthy();
	expect(getByTestId(configTest.id)).toBeTruthy();
});
