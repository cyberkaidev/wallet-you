import React from 'react';

import { themes } from '@/themes';

import { Text } from '../text';
import { Check, CheckBoxMessageContainer } from './styles';
import { CheckboxMessageProps } from './types';

export function CheckBoxMessage({ isActivated, onAction, message }: CheckboxMessageProps) {
	return (
		<CheckBoxMessageContainer>
			<Check
				testID="idCheckBoxMessage"
				hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
				value={isActivated}
				onValueChange={onAction}
				color={themes.colors.purple_100}
			/>
			<Text marginL={themes.spaces.space_5} size="M" weight="medium">
				{message}
			</Text>
		</CheckBoxMessageContainer>
	);
}
