import React from 'react';

import { ButtonIconProps } from '@/types/ButtonIconType';

import { ButtonIconPlatform } from './fragments/ButtonIconPlatform';

export function ButtonIcon({
	testID = 'idButtonIcon',
	children,
	onPress,
	disabled = false,
	marginT,
	marginB,
	marginR,
	marginL,
}: ButtonIconProps) {
	return (
		<ButtonIconPlatform
			testID={testID}
			onPress={onPress}
			disabled={disabled}
			marginT={marginT}
			marginB={marginB}
			marginR={marginR}
			marginL={marginL}
		>
			{children}
		</ButtonIconPlatform>
	);
}
