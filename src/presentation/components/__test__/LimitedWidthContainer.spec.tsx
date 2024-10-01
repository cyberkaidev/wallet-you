import { render } from "@testing-library/react-native";
import React from "react";

import { LimitedWidthContainer } from "../LimitedWidthContainer";
import { Text } from "../Text";

test("Render component", () => {
	const configTest = {
		title: "Hello World",
		id: "idLimitedWidth",
	};

	const { getByText, getByTestId } = render(
		<LimitedWidthContainer>
			<Text>{configTest.title}</Text>
		</LimitedWidthContainer>,
	);

	expect(getByText(configTest.title)).toBeTruthy();
	expect(getByTestId(configTest.id)).toBeTruthy();
});
