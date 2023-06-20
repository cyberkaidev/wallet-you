import { themes } from '@src/themes';
import styled from 'styled-components/native';
import { ItemsProps } from './types';

export const TransactionListContainer = styled.View`
	margin-top: ${themes.spaces.space_25};
`;

export const TransactionContainer = styled.View`
	border-radius: ${themes.border_radius.radius_10};
	background-color: ${themes.colors.black_200};
`;

export const TransactionItemContainer = styled.TouchableOpacity`
	flex: 1;
	height: 85px;
	flex-direction: row;
	padding-left: ${themes.spaces.space_10};
`;

export const Items = styled.View<ItemsProps>`
	flex-direction: row;
	align-items: center;
	flex: 1;
	padding-right: ${themes.spaces.space_10};
	border-bottom-width: 1px;
	border-bottom-color: ${({ borderVisible }) =>
		borderVisible ? themes.colors.grey_200 : 'transparent'};
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
	margin-right: ${themes.spaces.space_10};
`;

export const Center = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const Column = styled.View`
	flex: 1;
	margin-right: ${themes.spaces.space_15};
`;
