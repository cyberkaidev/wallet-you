import React from 'react';
import { RefreshControl, ScrollView as ScrollViewContainer } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '@/helpers/themes';
import { ScrollViewProps } from '@/types/ScrollViewType';

export function ScrollView({ children, refreshControl }: ScrollViewProps) {
	const [refreshing, setRefreshing] = React.useState(false);
	const insets = useSafeAreaInsets();

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
			contentContainerStyle={{
				paddingBottom: hp('3%') + insets.bottom,
				paddingTop: 25,
				paddingHorizontal: 15,
			}}
			endFillColor={colors.transparent}
			refreshControl={refreshController()}
			showsVerticalScrollIndicator={false}
		>
			{children}
		</ScrollViewContainer>
	);
}
