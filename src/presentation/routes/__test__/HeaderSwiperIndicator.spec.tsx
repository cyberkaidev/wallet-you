import { fireEvent, render, renderHook } from "@testing-library/react-native";
import React from "react";
import { I18nextProvider, useTranslation } from "react-i18next";

import { mockedNavigation } from "../../../../__test__/setup";
import { HeaderSwiperIndicator } from "../fragments/HeaderSwiperIndicator";

describe("HeaderSwiperIndicator", () => {
	const t = renderHook(() => useTranslation());

	const configTest = {
		title: "Hello World",
		id: "idHeaderSwiperIndicator",
		idButtonLeft: "idButtonLeft",
	};

	test("Render component", () => {
		const { getByText, getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<HeaderSwiperIndicator title={configTest.title} />
			</I18nextProvider>,
		);

		expect(getByText(configTest.title)).toBeTruthy();
		expect(getByTestId(configTest.id)).toBeTruthy();
	});

	test("Action", () => {
		const { getByTestId } = render(<HeaderSwiperIndicator title={configTest.title} />);
		const button = getByTestId(configTest.idButtonLeft);
		fireEvent.press(button);
		expect(mockedNavigation.goBack).toHaveBeenCalled();
	});
});
