import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface HeaderSwiperIndicatorProps {
	title: string;
	navigation: StackNavigationProp<ParamListBase, string, undefined>;
}
