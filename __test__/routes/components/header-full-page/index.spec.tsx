import { render } from '@testing-library/react-native';
import React from 'react';

import { HeaderFullPage } from '@/routes/components';

test('Render component', () => {
	const configTest = {
		title: 'Hello World',
		id: 'idHeaderFullPage',
	};

	const { getByText, getByTestId } = render(<HeaderFullPage title={configTest.title} />);

	expect(getByText(configTest.title)).toBeTruthy();
	expect(getByTestId(configTest.id)).toBeTruthy();
});
