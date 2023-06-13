import React from 'react';
import { TitleSubtitle } from '@src/components';
import { render } from '@testing-library/react-native';

describe('TitleSubtitle', () => {
	const configTest = {
		id: 'idTitleSubtitle',
		idSkeleton: 'idSkeletonLoading',
		title: 'Hello World',
		subTitle: 'Text',
	};

	test('Render component without load', () => {
		const { getByText, getByTestId } = render(
			<TitleSubtitle title={configTest.title} subTitle={configTest.subTitle} />,
		);

		expect(getByTestId(configTest.id)).toBeTruthy();
		expect(getByText(configTest.title)).toBeTruthy();
		expect(getByText(configTest.subTitle)).toBeTruthy();
	});

	test('Render component with load', () => {
		const { getByTestId } = render(
			<TitleSubtitle title={configTest.title} subTitle={configTest.subTitle} isLoading />,
		);

		expect(getByTestId(configTest.idSkeleton)).toBeTruthy();
	});
});
