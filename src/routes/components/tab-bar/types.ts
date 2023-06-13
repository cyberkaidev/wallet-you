import {
	BottomTabDescriptorMap,
	BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';

export interface TabBarProps {
	state: TabNavigationState<ParamListBase>;
	descriptors: BottomTabDescriptorMap;
	navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}
