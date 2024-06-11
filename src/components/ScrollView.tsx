import React from 'react';
import { RefreshControl, ScrollView as ScrollViewContainer } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { statusBarHeight } from '@/helpers/statusBarHeight';
import { colors, scaffold, spaces } from '@/helpers/themes';
import { ScrollViewProps } from '@/types/ScrollViewType';

export function ScrollView({ children, refreshControl }: ScrollViewProps) {
	const insets = useSafeAreaInsets();

	const [refreshing, setRefreshing] = React.useState(false);

	const paddingTop = React.useMemo(() => spaces.space_25, []);
	const paddingBottom = React.useMemo(() => hp('3%') + insets.bottom, []);
	const paddingHorizontal = React.useMemo(() => scaffold.page_space_horizontal, []);

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
					progressViewOffset={statusBarHeight}
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
