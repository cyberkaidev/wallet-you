import React from 'react';
import { RefreshControl } from 'react-native-gesture-handler';

import { themes } from '@/themes';

import { SafeArea, ScrollViewPageContainer } from './styles';
import { ScrollViewPageProps } from './types';

export function ScrollViewPage({
	children,
	contentHeight,
	enabledHorizontalPadding = true,
	enabledPaddingB = true,
	refreshControl,
}: ScrollViewPageProps) {
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

	return (
		<ScrollViewPageContainer
			testID="idScrollViewPage"
			contentContainerStyle={{ height: contentHeight }}
			horizontalPadding={enabledHorizontalPadding ? themes.spaces.space_15 : '0px'}
			alwaysBounceVertical
			endFillColor="transparent"
			refreshControl={refreshController()}
		>
			<SafeArea
				paddingB={enabledPaddingB ? themes.spaces.space_25 : '0px'}
				height={contentHeight ?? 'auto'}
			>
				{children}
			</SafeArea>
		</ScrollViewPageContainer>
	);
}
