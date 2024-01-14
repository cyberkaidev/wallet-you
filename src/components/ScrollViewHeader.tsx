import Constants from 'expo-constants';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { RefreshControl } from 'react-native-gesture-handler';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '@/helpers/themes';
import { useAppSettings } from '@/stores';
import { ScrollViewHeaderProps } from '@/types/ScrollViewHeaderType';

import { HeaderAnimated } from './fragments/HeaderAnimated';

export function ScrollViewHeader({
	children,
	enabledHorizontalPadding = true,
	refreshControl,
	headerTitle,
}: ScrollViewHeaderProps) {
	const [refreshing, setRefreshing] = React.useState(false);
	const insets = useSafeAreaInsets();
	const { isTablet } = useAppSettings(state => state);

	const HEADER_HEIGHT = hp('16%');
	const DEFAULT_MARGIN = isTablet ? hp('5%') : 25;
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
					progressBackgroundColor={colors.dark_grey}
					colors={[colors.white]}
					progressViewOffset={PADDING_TOP}
				/>
			);
		}
		return;
	}
	const translationY = useSharedValue(0);

	const scrollHandler = useAnimatedScrollHandler(event => {
		if (translationY.value === event.contentOffset.y) return;
		translationY.value = event.contentOffset.y;
	});

	return (
		<React.Fragment>
			<HeaderAnimated translationY={translationY} headerTitle={headerTitle} />
			<Animated.ScrollView
				testID="idScrollViewHeader"
				style={styles.scroll}
				alwaysBounceVertical
				contentContainerStyle={{
					paddingBottom: hp('3%') + insets.bottom,
					paddingTop: PADDING_TOP,
					paddingHorizontal: enabledHorizontalPadding ? 15 : 0,
				}}
				endFillColor={colors.transparent}
				refreshControl={refreshController()}
				onScroll={scrollHandler}
				scrollEventThrottle={1}
				showsVerticalScrollIndicator={false}
			>
				{children}
			</Animated.ScrollView>
		</React.Fragment>
	);
}

const styles = StyleSheet.create({
	scroll: {
		flex: 1,
		backgroundColor: colors.black_100,
	},
});
