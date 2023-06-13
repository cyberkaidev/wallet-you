import React from 'react';
import { CheckBoxMessage } from '@src/components';
import { fireEvent, render } from '@testing-library/react-native';

test('Render component and onPress', () => {
	const configTest = {
		message: 'Hello World',
		id: 'idCheckBoxMessage',
		onPress: jest.fn(),
	};

	const { getByText, getByTestId } = render(
		<CheckBoxMessage onAction={configTest.onPress} message={configTest.message} isActivated />,
	);

	expect(getByText(configTest.message)).toBeTruthy();
	const button = getByTestId(configTest.id);

	fireEvent.press(button);
	expect(configTest.onPress.mock.calls.length).toBe(1);
});
