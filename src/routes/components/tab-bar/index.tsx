import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { IconChart, IconHome, IconSettings } from '@/assets';
import { themes } from '@/themes';

import { ButtonsContainer, Indicator, SafeArea, TabBarContainer, Touch } from './styles';
import { TabBarProps } from './types';

export function TabBar({ state, descriptors, navigation }: TabBarProps) {
	const { colors } = themes;
	const SIZE_ICON = hp('2.5%');

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
										<IconHome
											size={SIZE_ICON}
											color={isFocused ? colors.light_cyan : colors.white}
										/>
									)}
									{route.name === 'BitcoinDataPage' && (
										<IconChart
											size={SIZE_ICON}
											color={isFocused ? colors.light_cyan : colors.white}
										/>
									)}
									{route.name === 'SettingsPage' && (
										<IconSettings
											size={SIZE_ICON}
											color={isFocused ? colors.light_cyan : colors.white}
										/>
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
