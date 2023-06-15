import { themes } from '@src/themes';
import styled from 'styled-components/native';

export const TransactionListContainer = styled.View`
	margin-top: ${themes.spaces.space_25};
`;

export const TransactionItemContainer = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	padding: ${themes.spaces.space_15} 0;
`;

export const Items = styled.View`
	flex-direction: column;
	justify-content: space-between;
	flex: 1;
`;

export const TextContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Circle = styled.View`
	width: 50px;
	height: 50px;
	border-radius: 50px;
	justify-content: center;
	align-items: center;
	background-color: ${themes.colors.black_200};
	margin-right: ${themes.spaces.space_10};
`;

export const Center = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
`;
