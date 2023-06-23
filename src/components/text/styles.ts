import styled from 'styled-components/native';

import { TextContainerProps } from './types';

export const TextContainer = styled.Text<TextContainerProps>`
	font-size: ${({ fontSize }) => fontSize}px;
	font-family: ${({ fontFamily }) => fontFamily};
	color: ${({ color }) => color};
	margin-top: ${({ marginT }) => marginT};
	margin-bottom: ${({ marginB }) => marginB};
	margin-right: ${({ marginR }) => marginR};
	margin-left: ${({ marginL }) => marginL};
`;
