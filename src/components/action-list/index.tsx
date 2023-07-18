import React from 'react';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { IconArrowRight } from '@/assets';
import { themes } from '@/themes';

import { Text } from '../text';
import {
	ActionListContainer,
	IconAndTitleContainer,
	IconContainer,
	Indicator,
	ItemButton,
} from './styles';
import { ActionListProps } from './types';

export function ActionList({ list }: ActionListProps) {
	return (
		<ActionListContainer testID="idActionList">
			{list.map((item, index) => (
				<ItemButton key={index} testID={item.testID} onPress={() => item.onAction()}>
					{item.prefixIcon && (
						<IconContainer testID={`idPrefixIcon${index}`}>{item.prefixIcon}</IconContainer>
					)}
					<IconAndTitleContainer>
						<Text size="M">{item.title}</Text>
						<IconContainer>
							<IconArrowRight size={hp('2%')} color={themes.colors.dark_grey} />
						</IconContainer>
						{list.length !== index + 1 && <Indicator />}
					</IconAndTitleContainer>
				</ItemButton>
			))}
		</ActionListContainer>
	);
}
