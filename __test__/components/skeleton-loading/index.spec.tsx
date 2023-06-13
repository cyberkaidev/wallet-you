import React from 'react';
import { SkeletonLoading } from '@src/components';
import { render } from '@testing-library/react-native';

test('Render component', () => {
	const { getByTestId } = render(
		<SkeletonLoading widthPorcent="10%" heightPorcent="10%" radius={0} />,
	);

	expect(getByTestId('idSkeletonLoading')).toBeTruthy();
});
