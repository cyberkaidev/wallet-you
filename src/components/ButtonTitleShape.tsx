import React from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';

import { borderRadius, colors, spaces } from '@/helpers/themes';
import { useAppSettings } from '@/stores/useAppSettings';
import { ButtonTitleShapeProps } from '@/types/ButtonTitleShapeType';

import { Text } from './Text';

export function ButtonTitleShape({
	title,
	disabled = false,
	onPress,
	size = 'large',
	loading = false,
	marginT = 0,
	marginB = 0,
	marginR = 0,
	marginL = 0,
}: ButtonTitleShapeProps) {
	const { t } = useTranslation();
	const { isTablet } = useAppSettings.getState();

	const LARGE_PADDING_V = isTablet ? spaces.space_20 : spaces.space_15;
	const LARGE_PADDING_H = isTablet ? spaces.space_15 : spaces.space_10;

	return (
		<TouchableOpacity
			testID="idButtonTitleShape"
			onPress={() => {
				if (!disabled || loading) onPress();
			}}
			disabled={disabled || loading}
			style={[
				styles.container,
				{
					width: size === 'large' ? '90%' : 'auto',
					paddingHorizontal: size === 'large' ? 0 : spaces.space_25,
					paddingVertical: size === 'large' ? LARGE_PADDING_V : LARGE_PADDING_H,
					borderRadius: size === 'large' ? borderRadius.radius_15 : borderRadius.radius_10,
					marginTop: marginT,
					marginBottom: marginB,
					marginRight: marginR,
					marginLeft: marginL,
					opacity: disabled ? 0.5 : 1,
				},
			]}
		>
			{!loading && (
				<Text size={size === 'large' ? 'l' : 'm'} weight="bold" color={colors.black_100}>
					{title}
				</Text>
			)}
			{loading && (
				<React.Fragment>
					<ActivityIndicator color={colors.black_100} size={isTablet ? 'large' : 'small'} />
					<Text
						size={size === 'large' ? 'l' : 'm'}
						marginL={spaces.space_5}
						weight="bold"
						color={colors.black_100}
					>
						{t('loading')}
					</Text>
				</React.Fragment>
			)}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: 'center',
		flexDirection: 'row',
		backgroundColor: colors.light_cyan,
		marginBottom: spaces.space_15,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
