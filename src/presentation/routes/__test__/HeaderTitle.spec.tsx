import { render } from "@testing-library/react-native";
import React from "react";

import { HeaderTitle } from "../fragments/HeaderTitle";

test("Render component", () => {
	const configTest = {
		title: "Hello World",
		id: "idHeaderTitle",
	};

	const { getByText, getByTestId } = render(<HeaderTitle title={configTest.title} />);

	expect(getByText(configTest.title)).toBeTruthy();
	expect(getByTestId(configTest.id)).toBeTruthy();
});
