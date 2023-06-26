import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { SelectList } from '@/components';

test('Render component and action', () => {
	const configTest = {
		idSelectList: 'idSelectList',
		onSelected: jest.fn(),
		list: [
			{ title: 'Title 1', ref: 'HW1' },
			{ title: 'Ttitle 2', ref: 'HW2' },
		],
	};

	const { getByText, getByTestId } = render(
		<SelectList
			data={configTest.list}
			onSelected={configTest.onSelected}
			selected={configTest.list[0].ref}
		/>,
	);

	expect(getByTestId(configTest.idSelectList)).toBeTruthy();
	expect(getByText(configTest.list[0].title)).toBeTruthy();
	expect(getByText(configTest.list[1].title)).toBeTruthy();

	const button = getByTestId('id0');
	fireEvent.press(button);
	expect(configTest.onSelected.mock.calls[0][0]).toBe(configTest.list[0].ref);
});
