import { render } from '@testing-library/react-native';
import React from 'react';

import { SkeletonLoading } from '@/components';

test('Render component', () => {
	const { getByTestId } = render(<SkeletonLoading heightPorcent="10%" radius={0} />);

	expect(getByTestId('idSkeletonLoading')).toBeTruthy();
});
