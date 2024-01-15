import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TextInput } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { borderRadius, colors, fontSizes, spaces, width } from '@/helpers/themes';
import { useAppSettings } from '@/stores/useAppSettings';
import { TextFieldAreaProps } from '@/types/TextFieldAreaType';

export function TextFieldArea({ value, onChangeText }: TextFieldAreaProps) {
	const { t } = useTranslation();
	const { isTablet } = useAppSettings(state => state);

	const [isFocused, setIsFocused] = React.useState(false);

	return (
		<TextInput
			testID="idTextFieldArea"
			value={value}
			onChangeText={onChangeText}
			placeholder={t('enter-public-key-btc') as string}
			onFocus={() => setIsFocused(true)}
			onBlur={() => setIsFocused(false)}
			autoCapitalize="none"
			autoCorrect={false}
			multiline
			scrollEnabled
			blurOnSubmit={true}
			cursorColor={colors.white}
			placeholderTextColor={colors.light_grey}
			returnKeyType="done"
			style={[
				styles.container,
				{
					textAlignVertical: 'top',
					borderWidth: isTablet ? 3 : 1,
					borderColor: isFocused ? colors.light_cyan : colors.transparent,
				},
			]}
			maxLength={150}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		maxWidth: width.max_width,
		alignSelf: 'center',
		backgroundColor: colors.black_000,
		borderRadius: borderRadius.radius_10,
		color: colors.white,
		fontSize: wp(fontSizes.m),
		fontFamily: 'Inter-Regular',
		height: hp('15%'),
		padding: spaces.space_10,
		borderStyle: 'solid',
	},
});
