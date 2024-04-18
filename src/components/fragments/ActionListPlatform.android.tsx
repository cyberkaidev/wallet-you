import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { IconArrowRight } from '@/assets';
import { Text } from '@/components/Text';
import { borderRadius, colors, spaces, width } from '@/helpers/themes';
import { useAppSettings } from '@/stores/useAppSettings';
import { ActionListProps } from '@/types/ActionListType';

export function ActionListPlatform({ list, marginB = 0 }: ActionListProps) {
	const { isTablet } = useAppSettings(state => state);

	return (
		<View testID="idActionList" style={[styles.container, { marginBottom: marginB }]}>
			{list.map((item, index) => (
				<RectButton
					key={index}
					testID={item.testID}
					rippleColor={colors.white_10pct}
					style={[
						styles.button,
						{
							paddingLeft: isTablet ? spaces.space_20 : spaces.space_15,
							borderBottomColor: list.length != index + 1 ? colors.dark_grey : colors.transparent,
						},
					]}
					onPress={() => item.onAction()}
				>
					<React.Fragment>
						{item.prefixIcon && (
							<View testID={`idPrefixIcon${index}`} style={styles.iconContainer}>
								{item.prefixIcon}
							</View>
						)}
						<View
							style={[
								styles.iconAndTitle,
								{ paddingVertical: isTablet ? spaces.space_25 : spaces.space_20 },
							]}
						>
							<Text size="m">{item.title}</Text>
							<View style={styles.iconContainer}>
								{item.arrowVisible === true && (
									<IconArrowRight porcentSize="3%" color={colors.light_cyan} />
								)}
							</View>
						</View>
					</React.Fragment>
				</RectButton>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		overflow: 'hidden',
		width: '100%',
		maxWidth: width.max_width,
		alignSelf: 'center',
		backgroundColor: colors.black_000,
		borderRadius: borderRadius.radius_10,
	},
	button: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderStyle: 'solid',
		borderBottomWidth: 1,
	},
	iconContainer: {
		marginRight: spaces.space_15,
	},
	iconAndTitle: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'relative',
	},
	indicator: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		height: 1,
		width: '100%',
		backgroundColor: colors.dark_grey,
	},
});
