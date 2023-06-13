import React from 'react';
import { ScrollViewPage } from '@src/components';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';

test('Render component', () => {
	const configTest = {
		id: 'idScrollViewPage',
	};

	const { getByTestId } = render(
		<ScrollViewPage>
			<View />
		</ScrollViewPage>,
	);

	expect(getByTestId(configTest.id)).toBeTruthy();
});
