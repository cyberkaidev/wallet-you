import React from 'react';
import { RefreshControl } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { themes } from '@/themes';

import { SafeArea, ScrollViewPageContainer } from './styles';
import { ScrollViewPageProps } from './types';

export function ScrollViewPage({ children, refreshControl }: ScrollViewPageProps) {
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
			alwaysBounceVertical
			contentContainerStyle={{
				paddingBottom: hp('3%'),
				paddingTop: 25,
				paddingHorizontal: 15,
			}}
			endFillColor={themes.colors.transparent}
			refreshControl={refreshController()}
			showsVerticalScrollIndicator={false}
		>
			<SafeArea>{children}</SafeArea>
		</ScrollViewPageContainer>
	);
}
