import React from "react";
import { RefreshControl, ScrollView as ScrollViewContainer } from "react-native-gesture-handler";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { deviceCharacteristics } from "~/application/utils/deviceCharacteristics";

import { colors, scaffold, spaces } from "../settings/themes";

type Props = {
	children: React.ReactNode | React.ReactNode[];
	refreshControl?: () => Promise<boolean> | boolean;
};

export function ScrollView({ children, refreshControl }: Props) {
	const insets = useSafeAreaInsets();
	const { STATUS_BAR_HEIGHT } = deviceCharacteristics();

	const [refreshing, setRefreshing] = React.useState(false);

	async function onRefresh() {
		setRefreshing(true);
		await refreshControl?.();
		setRefreshing(false);
	}

	function refreshController() {
		if (typeof refreshControl === "function") {
			return (
				<RefreshControl
					testID="idRefreshControl"
					refreshing={refreshing}
					onRefresh={onRefresh}
					progressBackgroundColor={colors.dark_grey}
					colors={[colors.white]}
					progressViewOffset={STATUS_BAR_HEIGHT}
				/>
			);
		}
		return;
	}

	return (
		<ScrollViewContainer
			testID="idScrollView"
			alwaysBounceVertical
			endFillColor={colors.transparent}
			refreshControl={refreshController()}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{
				paddingBottom: hp("3%") + insets.bottom,
				paddingTop: spaces.vertical.s,
				paddingHorizontal: scaffold.page_space_horizontal,
			}}
		>
			{children}
		</ScrollViewContainer>
	);
}
