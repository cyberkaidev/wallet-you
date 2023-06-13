import React from 'react';
import { fireEvent, render, renderHook } from '@testing-library/react-native';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { TextFieldArea } from '@src/components';

test('Render component and changeText', () => {
	const t = renderHook(() => useTranslation());
	const configTest = {
		value: 'Hello World',
		id: 'idTextFieldArea',
		onChangeText: jest.fn(),
	};

	const { getByTestId } = render(
		<I18nextProvider i18n={t.result.current.i18n}>
			<TextFieldArea value={configTest.value} onChangeText={configTest.onChangeText} />
		</I18nextProvider>,
	);
	expect(getByTestId(configTest.id)).toBeTruthy();

	const input = getByTestId(configTest.id);
	fireEvent.changeText(input, configTest.value);

	expect(configTest.onChangeText.mock.calls[0][0]).toBe(configTest.value);
});
