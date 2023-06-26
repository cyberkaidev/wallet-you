import styled from 'styled-components/native';

import { ButtonTitleGhostContainerProps } from './types';

export const ButtonTitleGhostContainer = styled.TouchableOpacity<ButtonTitleGhostContainerProps>`
	align-self: center;
	flex-direction: row;
	padding: 10px;
	background-color: transparent;
	align-items: center;
	justify-content: center;
	margin-top: ${({ marginT }) => marginT};
	margin-bottom: ${({ marginB }) => marginB};
	margin-right: ${({ marginR }) => marginR};
	margin-left: ${({ marginL }) => marginL};
	opacity: ${({ isOpacity }) => (isOpacity ? 0.5 : 1)};
`;
