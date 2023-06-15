import React from 'react';
import { ScrollViewPage } from '@src/components';
import { act, render } from '@testing-library/react-native';
import { View } from 'react-native';

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
