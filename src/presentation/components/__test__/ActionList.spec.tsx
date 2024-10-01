import { act, render, renderHook } from "@testing-library/react-native";
import React from "react";
import { I18nextProvider, useTranslation } from "react-i18next";

import { IconArrowRight } from "~/presentation/assets";

import { ActionList } from "../ActionList";

describe("ActionList", () => {
	const t = renderHook(() => useTranslation());

	const configTest = {
		idActionList: "idActionList",
		idPrefixIcon: "idPrefixIcon0",
		list: [
			{
				testID: "idHelloWorld",
				prefixIcon: <IconArrowRight />,
				title: "Hello World",
				onAction: jest.fn(),
			},
		],
	};

	test("Render component", () => {
		const { getByTestId, getByText } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<ActionList list={configTest.list} />
			</I18nextProvider>,
		);

		expect(getByTestId(configTest.idActionList)).toBeTruthy();
		expect(getByTestId(configTest.idPrefixIcon)).toBeTruthy();
		expect(getByTestId(configTest.list[0].testID)).toBeTruthy();
		expect(getByText(configTest.list[0].title)).toBeTruthy();
	});

	test("Action", () => {
		const { getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<ActionList list={configTest.list} />
			</I18nextProvider>,
		);

		act(() => expect(getByTestId(configTest.list[0].testID)).toBeTruthy());
	});
});
