import { act, render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

import { ScrollViewPage } from '@/components';

describe('ScrollViewPage', () => {
	const configTest = {
		id: 'idScrollViewPage',
		idRefreshControl: 'idRefreshControl',
		refreshControl: () => true,
	};

	test('Render component', () => {
		const { getByTestId } = render(
			<ScrollViewPage>
				<View />
			</ScrollViewPage>,
		);

		expect(getByTestId(configTest.id)).toBeTruthy();
	});

	test('Refresh scroll', async () => {
		const component = render(
			<ScrollViewPage refreshControl={configTest.refreshControl}>
				<View />
			</ScrollViewPage>,
		);

		const scrollView = component.getByTestId(configTest.id);
		expect(scrollView).toBeDefined();
		const { refreshControl } = scrollView.props;
		await act(async () => {
			refreshControl.props.onRefresh();
		});
	});
});
