import { fireEvent, render, renderHook } from "@testing-library/react-native";
import React from "react";
import { I18nextProvider, useTranslation } from "react-i18next";

import { IconSettings } from "@/assets";

import { ButtonIcon } from "../ButtonIcon";

describe("ButtonIcon", () => {
	const configTest = {
		id: "idButtonIcon",
		loading: "Loading",
	};

	test("Render component and onPress", () => {
		const t = renderHook(() => useTranslation());
		const configItem = {
			onPress: jest.fn(),
		};

		const { getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<ButtonIcon onPress={configItem.onPress}>
					<IconSettings />
				</ButtonIcon>
			</I18nextProvider>,
		);

		const button = getByTestId(configTest.id);

		fireEvent.press(button);
		expect(configItem.onPress.mock.calls.length).toBe(1);
	});

	test("Disabled", async () => {
		const t = renderHook(() => useTranslation());
		const configItem = {
			onPress: jest.fn(),
		};

		const { getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<ButtonIcon onPress={configItem.onPress} disabled>
					<IconSettings />
				</ButtonIcon>
			</I18nextProvider>,
		);
		const button = getByTestId(configTest.id);

		fireEvent.press(button);
		expect(configItem.onPress).not.toHaveBeenCalled();
	});
});
