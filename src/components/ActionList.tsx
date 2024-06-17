import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { IconArrowRight } from '@/assets';
import { Text } from '@/components/Text';
import { borderRadius, colors, spaces, width } from '@/helpers/themes';
import { useAppSettings } from '@/stores/useAppSettings';
import { ActionListButtonProps, ActionListProps } from '@/types/ActionListType';

function Button({ testID, onAction, children }: ActionListButtonProps) {
	if (Platform.OS === 'android') {
		return (
			<RectButton
				testID={testID}
				rippleColor={colors.white_10pct}
				style={styles.button}
				onPress={() => onAction()}
			>
				{children}
			</RectButton>
		);
	}

	return (
		<TouchableOpacity testID={testID} style={styles.button} onPress={() => onAction()}>
			{children}
		</TouchableOpacity>
	);
}

export function ActionList({ list, marginB }: ActionListProps) {
	const { isTablet } = useAppSettings();

	return (
		<View
			testID="idActionList"
			style={[
				styles.container,
				{
					marginBottom: marginB,
					borderRadius: isTablet ? borderRadius.radius_15 : borderRadius.radius_10,
				},
			]}
		>
			{list.map((item, index) => (
				<Button key={index} testID={item.testID} onAction={() => item.onAction()}>
					<React.Fragment>
						{item.prefixIcon && (
							<View testID={`idPrefixIcon${index}`} style={styles.iconContainer}>
								{item.prefixIcon}
							</View>
						)}
						<View style={styles.iconAndTitle}>
							<Text size="m">{item.title}</Text>
							<View style={styles.iconContainer}>
								{item.arrowVisible === true && (
									<IconArrowRight porcentSize={isTablet ? '2%' : '3%'} color={colors.dark_grey} />
								)}
							</View>
							{list.length !== index + 1 && <View style={styles.indicator} />}
						</View>
					</React.Fragment>
				</Button>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		maxWidth: width.max_width_800,
		alignSelf: 'center',
		backgroundColor: colors.black_000,
		overflow: 'hidden',
	},
	button: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: spaces.horizontal.m,
	},
	iconContainer: {
		marginRight: spaces.horizontal.m,
	},
	iconAndTitle: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'relative',
		paddingVertical: spaces.vertical.s,
	},
	indicator: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		height: 1,
		width: '100%',
		backgroundColor: colors.dark_cyan,
	},
});
