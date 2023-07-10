import React from 'react';
import { RefreshControl } from 'react-native-gesture-handler';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { themes } from '@/themes';

import { ScrollViewContainer } from './styles';
import { ScrollViewProps } from './types';

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
					progressBackgroundColor={themes.colors.grey_200}
					colors={[themes.colors.white]}
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
			endFillColor={themes.colors.transparent}
			refreshControl={refreshController()}
			showsVerticalScrollIndicator={false}
		>
			{children}
		</ScrollViewContainer>
	);
}
