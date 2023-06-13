import React from 'react';
import { TabBarContainer, SafeArea, Touch } from './styles';
import { IconChart, IconHome, IconSettings } from '@src/assets';
import { TabBarProps } from './types';
import { themes } from '@src/themes';

export function TabBar({ state, descriptors, navigation }: TabBarProps) {
	const { colors } = themes;

	return (
		<TabBarContainer testID="idTabBar">
			<SafeArea>
				{state.routes.map((route, index) => {
					const isFocused = state.index === index;
					const { options } = descriptors[route.key];

					const onPress = () => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
							canPreventDefault: true,
						});

						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name);
						}
					};

					return (
						<Touch
							key={route.key}
							onPress={onPress}
							accessibilityRole="button"
							accessibilityState={isFocused ? { selected: true } : {}}
							accessibilityLabel={options.tabBarAccessibilityLabel}
							testID={`id${route.name}`}
						>
							{route.name === 'HomePage' && (
								<IconHome color={isFocused ? colors.purple_100 : colors.white} />
							)}
							{route.name === 'BitcoinDataPage' && (
								<IconChart color={isFocused ? colors.purple_100 : colors.white} />
							)}
							{route.name === 'SettingsPage' && (
								<IconSettings color={isFocused ? colors.purple_100 : colors.white} />
							)}
						</Touch>
					);
				})}
			</SafeArea>
		</TabBarContainer>
	);
}
