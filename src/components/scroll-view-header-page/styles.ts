import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { themes } from '@/themes';

export const ScrollViewHeaderPageContainer = styled(Animated.ScrollView)`
	flex: 1;
	background-color: ${themes.colors.black_300};
`;

export const SafeArea = styled.SafeAreaView``;
