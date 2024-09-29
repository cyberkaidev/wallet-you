import { act, render } from "@testing-library/react-native";
import React from "react";
import { View } from "react-native";

import { ScrollView } from "../ScrollView";

describe("ScrollView", () => {
	const configTest = {
		id: "idScrollView",
		idRefreshControl: "idRefreshControl",
		refreshControl: () => true,
	};

	test("Render component", () => {
		const { getByTestId } = render(
			<ScrollView>
				<View />
			</ScrollView>,
		);

		expect(getByTestId(configTest.id)).toBeTruthy();
	});

	test("Refresh scroll", async () => {
		const component = render(
			<ScrollView refreshControl={configTest.refreshControl}>
				<View />
			</ScrollView>,
		);

		const scrollView = component.getByTestId(configTest.id);
		expect(scrollView).toBeDefined();
		const { refreshControl } = scrollView.props;
		await act(async () => {
			refreshControl.props.onRefresh();
		});
	});
});
