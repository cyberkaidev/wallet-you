import React from 'react';
import { render } from '@testing-library/react-native';
import { HeaderSwiperIndicator } from '@src/routes/components';

test('Render component', () => {
	const configTest = {
		title: 'Hello World',
		id: 'idHeaderSwiperIndicator',
	};

	const { getByText, getByTestId } = render(<HeaderSwiperIndicator title={configTest.title} />);

	expect(getByText(configTest.title)).toBeTruthy();
	expect(getByTestId(configTest.id)).toBeTruthy();
});
