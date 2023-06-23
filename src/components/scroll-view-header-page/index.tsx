import Constants from 'expo-constants';
import React from 'react';
import { Platform } from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

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
					progressViewOffset={Platform.OS === 'ios' ? Constants.statusBarHeight + 115 : 115}
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
				horizontalPadding={enabledHorizontalPadding ? themes.spaces.space_15 : '0px'}
				contentContainerStyle={{ paddingBottom: 175 }}
				alwaysBounceVertical
				endFillColor="transparent"
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
