import { themes } from '@src/themes';
import styled from 'styled-components/native';

export const HeaderFullPageContainer = styled.View`
	background-color: ${themes.colors.black_300};
`;

export const SafeArea = styled.SafeAreaView`
	padding: ${themes.spaces.space_10} ${themes.spaces.space_15};
`;
