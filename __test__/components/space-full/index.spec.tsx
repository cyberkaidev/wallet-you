import { render } from '@testing-library/react-native';
import React from 'react';

import { SpaceFull } from '@/components';

test('Render component', () => {
	const configTest = {
		id: 'idSpaceFull',
	};

	const { getByTestId } = render(<SpaceFull />);

	expect(getByTestId(configTest.id)).toBeTruthy();
});
