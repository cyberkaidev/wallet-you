import React from 'react';
import { SpaceFull } from '@src/components';
import { render } from '@testing-library/react-native';

test('Render component', () => {
	const configTest = {
		id: 'idSpaceFull',
	};

	const { getByTestId } = render(<SpaceFull />);

	expect(getByTestId(configTest.id)).toBeTruthy();
});
