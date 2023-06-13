import styled from 'styled-components/native';
import { TitleSubtitleContainerProps } from './types';

export const TitleSubtitleContainer = styled.View<TitleSubtitleContainerProps>`
	margin-top: ${({ marginT }) => marginT};
	margin-bottom: ${({ marginB }) => marginB};
`;
