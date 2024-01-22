import Constants from 'expo-constants';
import React from 'react';
import { Platform } from 'react-native';
import { RefreshControl, ScrollView as ScrollViewContainer } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, spaces } from '@/helpers/themes';
import { ScrollViewProps } from '@/types/ScrollViewType';

export function ScrollView({ children, refreshControl }: ScrollViewProps) {
	const [refreshing, setRefreshing] = React.useState(false);
	const insets = useSafeAreaInsets();

	const HEIGHT_STATUSBAR = React.useMemo(() => {
		return Platform.OS === 'android' ? 0 : Constants.statusBarHeight;
	}, []);

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
				paddingTop: spaces.space_25 + HEIGHT_STATUSBAR,
				paddingHorizontal: spaces.space_15,
			}}
			endFillColor={colors.transparent}
			refreshControl={refreshController()}
			showsVerticalScrollIndicator={false}
		>
			{children}
		</ScrollViewContainer>
	);
}
