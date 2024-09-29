import { fireEvent, render, renderHook } from "@testing-library/react-native";
import React from "react";
import { I18nextProvider, useTranslation } from "react-i18next";

import { mockedAlertModalActions } from "../../../../__test__/setup";
import { AlertModal } from "../AlertModal";

describe("AlertModal", () => {
	const configTest = {
		title: "Hello World",
		id: "idAlertModal",
		idCancel: "idCancel",
		idConfirm: "idConfirm",
		onCancel: jest.fn(),
		onConfirm: jest.fn(),
	};

	test("Render component", () => {
		const t = renderHook(() => useTranslation());

		const { getByText, getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<AlertModal />
			</I18nextProvider>,
		);

		expect(getByText(configTest.title)).toBeTruthy();
		expect(getByTestId(configTest.id)).toBeTruthy();
		expect(getByTestId(configTest.idCancel)).toBeTruthy();
		expect(getByTestId(configTest.idConfirm)).toBeTruthy();
	});

	test("Actions", () => {
		const t = renderHook(() => useTranslation());

		const { getByText, getByTestId } = render(
			<I18nextProvider i18n={t.result.current.i18n}>
				<AlertModal />
			</I18nextProvider>,
		);

		expect(getByText(configTest.title)).toBeTruthy();
		expect(getByTestId(configTest.id)).toBeTruthy();
		expect(getByTestId(configTest.idCancel)).toBeTruthy();
		expect(getByTestId(configTest.idConfirm)).toBeTruthy();

		const cancel = getByTestId(configTest.idCancel);
		const confirm = getByTestId(configTest.idConfirm);

		fireEvent.press(cancel);
		expect(mockedAlertModalActions.onCancel).toHaveBeenCalled();

		fireEvent.press(confirm);
		expect(mockedAlertModalActions.onConfirm).toHaveBeenCalled();
	});
});
