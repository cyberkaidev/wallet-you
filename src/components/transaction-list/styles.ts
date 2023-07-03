import styled from 'styled-components/native';

import { themes } from '@/themes';

import { ItemsProps } from './types';

const { colors, border_radius, spaces } = themes;

export const TransactionListContainer = styled.View`
	margin-top: ${spaces.space_25};
`;

export const TransactionContainer = styled.View`
	border-radius: ${border_radius.radius_10};
	background-color: ${colors.black_200};
`;

export const TransactionItemContainer = styled.TouchableOpacity`
	flex: 1;
	flex-direction: row;
	padding-left: ${spaces.space_10};
`;

export const Items = styled.View<ItemsProps>`
	flex: 1;
	flex-direction: row;
	align-items: center;
	padding-top: ${spaces.space_25};
	padding-bottom: ${spaces.space_25};
	padding-right: ${spaces.space_10};
	border-bottom-width: 1px;
	border-bottom-color: ${({ borderVisible }) =>
		borderVisible ? colors.grey_200 : colors.transparent};
	border-bottom-style: solid;
`;

export const TextContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Circle = styled.View`
	width: 50px;
	justify-content: center;
	align-items: center;
	margin-right: ${spaces.space_10};
`;

export const Center = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const Column = styled.View`
	flex: 1;
	margin-right: ${spaces.space_15};
`;
