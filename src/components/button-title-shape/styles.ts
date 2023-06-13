import { themes } from '@src/themes';
import styled from 'styled-components/native';
import { ButtonTitleShapeContainerProps } from './types';

export const ButtonTitleShapeContainer = styled.TouchableOpacity<ButtonTitleShapeContainerProps>`
	align-self: center;
	flex-direction: row;
	padding: ${({ paddingV, paddingH }) => `${paddingV} ${paddingH}`};
	border-radius: ${({ borderR }) => borderR};
	background-color: ${themes.colors.purple_100};
	margin-bottom: ${themes.spaces.space_15};
	align-items: center;
	justify-content: center;
	width: ${({ width }) => width};
	margin-top: ${({ marginT }) => marginT};
	margin-bottom: ${({ marginB }) => marginB};
	margin-right: ${({ marginR }) => marginR};
	margin-left: ${({ marginL }) => marginL};
	opacity: ${({ isOpacity }) => (isOpacity ? 0.5 : 1)};
`;
