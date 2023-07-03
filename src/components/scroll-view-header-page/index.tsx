import Constants from 'expo-constants';
import React from 'react';
import { Platform } from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { themes } from '@/themes';

import { HeaderAnimated } from './components/header-animated';
import { SafeArea, ScrollViewHeaderPageContainer } from './styles';
import { ScrollViewHeaderPageProps } from './types';

export function ScrollViewHeaderPage({
	children,
	enabledHorizontalPadding = true,
	refreshControl,
	headerTitle,
}: ScrollViewHeaderPageProps) {
	const [refreshing, setRefreshing] = React.useState(false);

	const HEADER_HEIGHT = hp('16%');
	const DEFAULT_MARGIN = 25;
	const STATUS_BAR = Constants.statusBarHeight;

	const PADDING_TOP = (Platform.OS === 'ios' ? STATUS_BAR : 0) + HEADER_HEIGHT + DEFAULT_MARGIN;

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
					progressBackgroundColor={themes.colors.grey_200}
					colors={[themes.colors.white]}
					progressViewOffset={PADDING_TOP}
				/>
			);
		}
		return;
	}
	const translationY = useSharedValue(0);

	const scrollHandler = useAnimatedScrollHandler(event => {
		translationY.value = event.contentOffset.y;
	});

	return (
		<React.Fragment>
			<ScrollViewHeaderPageContainer
				testID="idScrollViewHeaderPage"
				alwaysBounceVertical
				contentContainerStyle={{
					paddingBottom: hp('3%'),
					paddingTop: PADDING_TOP,
					paddingHorizontal: enabledHorizontalPadding ? 15 : 0,
				}}
				endFillColor={themes.colors.transparent}
				refreshControl={refreshController()}
				onScroll={scrollHandler}
				scrollEventThrottle={1}
				showsVerticalScrollIndicator={false}
			>
				<SafeArea>{children}</SafeArea>
			</ScrollViewHeaderPageContainer>
			<HeaderAnimated translationY={translationY} headerTitle={headerTitle} />
		</React.Fragment>
	);
}
