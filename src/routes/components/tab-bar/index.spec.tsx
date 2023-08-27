import {
	BottomTabDescriptorMap,
	BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React from 'react';

import { TabBar } from '@/routes/components';

test('Render component', () => {
	const configTest = {
		id: 'idTabBar',
		idHome: 'idHomePage',
		state: {
			history: [{ key: 'HomePage-_xBphkqkzDAOcozhTBEcK', type: 'route' }],
			index: 0,
			key: 'tab-fLIiCKIOQp-WyWjCUc4_y',
			routeNames: ['HomePage'],
			routes: [{ key: 'HomePage-_xBphkqkzDAOcozhTBEcK', name: 'HomePage', params: undefined }],
			stale: false,
			type: 'tab',
		} as TabNavigationState<ParamListBase>,
		descriptors: {
			'HomePage-_xBphkqkzDAOcozhTBEcK': {
				navigation: {
					addListener: jest.fn,
					canGoBack: jest.fn,
					getState: jest.fn,
					goBack: jest.fn,
					isFocused: () => true,
					jumpTo: jest.fn,
					navigate: jest.fn,
					pop: jest.fn,
					popToTop: jest.fn,
					push: jest.fn,
					removeListener: jest.fn,
					replace: jest.fn,
					reset: jest.fn,
					setOptions: jest.fn,
					setParams: jest.fn,
				},
				options: { headerShown: false },
				render: jest.fn,
				route: { key: 'HomePage-_xBphkqkzDAOcozhTBEcK', name: 'HomePage', params: undefined },
			},
		} as unknown as BottomTabDescriptorMap,
		navigation: jest.fn as unknown as NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>,
	};

	const { getByTestId } = render(
		<TabBar
			state={configTest.state}
			descriptors={configTest.descriptors}
			navigation={configTest.navigation}
		/>,
	);

	expect(getByTestId(configTest.id)).toBeTruthy();
	expect(getByTestId(configTest.idHome)).toBeTruthy();
});
