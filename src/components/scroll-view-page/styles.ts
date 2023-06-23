import styled from 'styled-components/native';

import { themes } from '@/themes';

export const ScrollViewPageContainer = styled.ScrollView`
	flex: 1;
	padding-left: ${themes.spaces.space_15};
	padding-right: ${themes.spaces.space_15};
	padding-top: ${themes.spaces.space_25};
`;

export const SafeArea = styled.SafeAreaView`
	background-color: ${themes.colors.black_300};
`;
