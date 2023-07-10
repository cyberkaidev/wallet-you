import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { themes } from '@/themes';

export const ScrollViewHeaderContainer = styled(Animated.ScrollView)`
	flex: 1;
	background-color: ${themes.colors.black_300};
`;
