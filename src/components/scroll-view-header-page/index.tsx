import React from 'react';
import { SafeArea, ScrollViewHeaderPageContainer } from './styles';
import { ScrollViewHeaderPageProps } from './types';
import { themes } from '@src/themes';
import { RefreshControl } from 'react-native-gesture-handler';
import { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { HeaderAnimated } from './components/header-animated';

export function ScrollViewHeaderPage({
	children,
	enabledHorizontalPadding = true,
	refreshControl,
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
				alwaysBounceVertical
				endFillColor="transparent"
				refreshControl={refreshController()}
				onScroll={scrollHandler}
				scrollEventThrottle={1}
			>
				<SafeArea>{children}</SafeArea>
			</ScrollViewHeaderPageContainer>
			<HeaderAnimated translationY={translationY} />
		</React.Fragment>
	);
}
