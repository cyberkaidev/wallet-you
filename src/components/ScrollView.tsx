import React from 'react';
import { RefreshControl, ScrollView as ScrollViewContainer } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, spaces } from '@/helpers/themes';
import { ScrollViewProps } from '@/types/ScrollViewType';

export function ScrollView({
	children,
	refreshControl,
	enabledHorizontalPadding = true,
}: ScrollViewProps) {
	const [refreshing, setRefreshing] = React.useState(false);
	const insets = useSafeAreaInsets();

	const paddingTop = React.useMemo(() => {
		return spaces.space_25;
	}, []);

	const paddingBottom = React.useMemo(() => {
		return hp('3%') + insets.bottom;
	}, []);

	const paddingHorizontal = React.useMemo(() => {
		return enabledHorizontalPadding ? spaces.space_15 : 0;
	}, [enabledHorizontalPadding]);

	async function onRefresh() {
		setRefreshing(true);
		await refreshControl?.();
		setRefreshing(false);
	}

	function refreshController() {
		if (typeof refreshControl === 'function') {
			return (
				<RefreshControl
					testID="idRefreshControl"
					refreshing={refreshing}
					onRefresh={onRefresh}
					progressBackgroundColor={colors.dark_grey}
					colors={[colors.white]}
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
				paddingBottom,
				paddingTop,
				paddingHorizontal,
			}}
		>
			{children}
		</ScrollViewContainer>
	);
}
