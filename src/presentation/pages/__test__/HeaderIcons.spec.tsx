import { fireEvent, render, renderHook } from "@testing-library/react-native";
import React from "react";
import { I18nextProvider, useTranslation } from "react-i18next";

import { mockedNavigation } from "../../../../__test__/setup";
import { HeaderIcons } from "../fragments/HeaderIcons";

describe("HeaderIcons", () => {
	const configTest = {
		idSettings: "idSettings",
		title: "My wallet",
	};

	test("Render component", () => {
		const t = renderHook(() => useTranslation());

		const { getByTestId, getByText } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<HeaderIcons />
			</I18nextProvider>,
		);
		expect(getByTestId(configTest.idSettings)).toBeTruthy();
		expect(getByText(configTest.title)).toBeTruthy();
	});

	test("Settings action", () => {
		const t = renderHook(() => useTranslation());

		const { getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<HeaderIcons />
			</I18nextProvider>,
		);
		expect(getByTestId(configTest.idSettings)).toBeTruthy();

		const settings = getByTestId(configTest.idSettings);

		fireEvent.press(settings);
		expect(mockedNavigation.navigate).toHaveBeenCalled();
	});
});
