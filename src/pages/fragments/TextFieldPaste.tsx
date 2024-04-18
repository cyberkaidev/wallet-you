import * as Clipboard from 'expo-clipboard';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TextInput, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { ButtonTitleGhost } from '@/components/ButtonTitleGhost';
import { borderRadius, colors, fontSizes, spaces, width } from '@/helpers/themes';
import { useAppSettings } from '@/stores/useAppSettings';
import { TextFieldPasteProps } from '@/types/RegisterKeyPageType';

export function TextFieldPaste({ value, onChangeText }: TextFieldPasteProps) {
	const { t } = useTranslation();
	const { isTablet } = useAppSettings(state => state);

	const [isFocused, setIsFocused] = React.useState(false);

	async function fetchCopiedText() {
		const text = await Clipboard.getStringAsync();
		onChangeText(text);
	}

	return (
		<View
			style={[
				styles.relative,
				{
					borderWidth: isTablet ? 3 : 2,
					borderColor: isFocused ? colors.light_cyan : colors.transparent,
				},
			]}
		>
			<TextInput
				testID="idTextFieldPaste"
				value={value}
				onChangeText={onChangeText}
				placeholder={t('public-key-btc')}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				autoCapitalize="none"
				autoCorrect={false}
				scrollEnabled
				blurOnSubmit={true}
				cursorColor={colors.white}
				placeholderTextColor={colors.light_grey}
				returnKeyType="done"
				style={styles.container}
				maxLength={150}
			/>
			<ButtonTitleGhost title={t('paste')} onPress={fetchCopiedText} />
		</View>
	);
}

const styles = StyleSheet.create({
	relative: {
		alignSelf: 'center',
		width: '100%',
		maxWidth: width.max_width,
		flexDirection: 'row',
		backgroundColor: colors.black_000,
		borderRadius: borderRadius.radius_10,
	},
	container: {
		flex: 1,
		color: colors.white,
		fontSize: wp(fontSizes.m),
		fontFamily: 'Figtree-Regular',
		padding: spaces.space_10,
		borderStyle: 'solid',
	},
});
