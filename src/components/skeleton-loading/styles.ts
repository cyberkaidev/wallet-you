import styled from 'styled-components/native';
import { SkeletonLoadingContainerProps } from './types';

export const SkeletonLoadingContainer = styled.View<SkeletonLoadingContainerProps>`
	margin-top: ${({ marginT }) => marginT};
	margin-bottom: ${({ marginB }) => marginB};
	margin-right: ${({ marginR }) => marginR};
	margin-left: ${({ marginL }) => marginL};
`;
