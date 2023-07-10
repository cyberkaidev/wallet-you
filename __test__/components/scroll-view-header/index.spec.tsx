import { act, render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

import { ScrollViewHeader } from '@/components';

describe('ScrollViewHeader', () => {
	const configTest = {
		idScrollViewHeader: 'idScrollViewHeader',
		idHeaderAnimatedContainer: 'idHeaderAnimatedContainer',
		headerTitle: 'Hello World',
		idRefreshControl: 'idRefreshControl',
		refreshControl: () => true,
	};

	test('Render component', () => {
		const { getByTestId, getAllByText } = render(
			<ScrollViewHeader headerTitle={configTest.headerTitle}>
				<View />
			</ScrollViewHeader>,
		);

		expect(getByTestId(configTest.idScrollViewHeader)).toBeTruthy();
		expect(getByTestId(configTest.idHeaderAnimatedContainer)).toBeTruthy();
		expect(getAllByText(configTest.headerTitle)).toBeTruthy();
	});

	test('Refresh scroll', async () => {
		const component = render(
			<ScrollViewHeader
				headerTitle={configTest.headerTitle}
				refreshControl={configTest.refreshControl}
			>
				<View />
			</ScrollViewHeader>,
		);

		const scrollView = component.getByTestId(configTest.idScrollViewHeader);
		expect(scrollView).toBeDefined();
		const { refreshControl } = scrollView.props;
		await act(async () => {
			refreshControl.props.onRefresh();
		});
	});
});
