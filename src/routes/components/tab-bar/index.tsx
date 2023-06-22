import React from 'react';
import { TabBarContainer, SafeArea, Touch, Indicator, ButtonsContainer } from './styles';
import { IconChart, IconHome, IconSettings } from '@src/assets';
import { TabBarProps } from './types';
import { themes } from '@src/themes';

export function TabBar({ state, descriptors, navigation }: TabBarProps) {
	const { colors } = themes;

	return (
		<TabBarContainer testID="idTabBar">
			<SafeArea>
				<ButtonsContainer>
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
								<Indicator isFocused={isFocused}>
									{route.name === 'HomePage' && (
										<IconHome size={20} color={isFocused ? colors.purple_100 : colors.white} />
									)}
									{route.name === 'BitcoinDataPage' && (
										<IconChart size={20} color={isFocused ? colors.purple_100 : colors.white} />
									)}
									{route.name === 'SettingsPage' && (
										<IconSettings size={20} color={isFocused ? colors.purple_100 : colors.white} />
									)}
								</Indicator>
							</Touch>
						);
					})}
				</ButtonsContainer>
			</SafeArea>
		</TabBarContainer>
	);
}
