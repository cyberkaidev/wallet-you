import { act, render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

import { ScrollViewHeaderPage } from '@/components';

describe('ScrollViewHeaderPage', () => {
	const configTest = {
		idScrollViewHeaderPage: 'idScrollViewHeaderPage',
		idHeaderAnimatedContainer: 'idHeaderAnimatedContainer',
		headerTitle: 'Hello World',
		idRefreshControl: 'idRefreshControl',
		refreshControl: () => true,
	};

	test('Render component', () => {
		const { getByTestId, getAllByText } = render(
			<ScrollViewHeaderPage headerTitle={configTest.headerTitle}>
				<View />
			</ScrollViewHeaderPage>,
		);

		expect(getByTestId(configTest.idScrollViewHeaderPage)).toBeTruthy();
		expect(getByTestId(configTest.idHeaderAnimatedContainer)).toBeTruthy();
		expect(getAllByText(configTest.headerTitle)).toBeTruthy();
	});

	test('Refresh scroll', async () => {
		const component = render(
			<ScrollViewHeaderPage
				headerTitle={configTest.headerTitle}
				refreshControl={configTest.refreshControl}
			>
				<View />
			</ScrollViewHeaderPage>,
		);

		const scrollView = component.getByTestId(configTest.idScrollViewHeaderPage);
		expect(scrollView).toBeDefined();
		const { refreshControl } = scrollView.props;
		await act(async () => {
			refreshControl.props.onRefresh();
		});
	});
});
