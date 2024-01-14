import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconChart, IconHome, IconSettings } from '@/assets';
import { colors } from '@/helpers/themes';
import { TabBarProps } from '@/types/TabBarType';

export function TabBar({ state, descriptors, navigation }: TabBarProps) {
	const SIZE_ICON = hp('2.5%');

	return (
		<View testID="idTabBar" style={styles.container}>
			<SafeAreaView>
				<View style={styles.buttonContainer}>
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
							<TouchableOpacity
								key={route.key}
								onPress={onPress}
								accessibilityRole="button"
								accessibilityState={isFocused ? { selected: true } : {}}
								accessibilityLabel={options.tabBarAccessibilityLabel}
								testID={`id${route.name}`}
								style={styles.button}
							>
								<View
									style={[
										styles.indicator,
										{ backgroundColor: isFocused ? colors.dark_cyan : colors.transparent },
									]}
								>
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
								</View>
							</TouchableOpacity>
						);
					})}
				</View>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.black_000,
	},
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	indicator: {
		width: hp('8.5%'),
		maxWidth: 120,
		height: hp('4.5%'),
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 100,
	},
	buttonContainer: {
		height: hp('8%'),
		width: '100%',
		flexDirection: 'row',
	},
});
