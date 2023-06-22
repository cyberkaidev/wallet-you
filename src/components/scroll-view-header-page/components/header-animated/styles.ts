import { themes } from '@src/themes';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const HeaderAnimatedContainer = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	background-color: ${themes.colors.black_200};
`;

export const SafeArea = styled.SafeAreaView``;

export const FirstItem = styled.View`
	height: 60px;
	z-index: 2;
	padding: 0 ${themes.spaces.space_15};
	justify-content: center;
	background-color: ${themes.colors.black_200};
`;

export const SecondtItem = styled(Animated.View)`
	position: absolute;
	height: 55px;
	width: 100%;
	z-index: 1;
	padding: 0 ${themes.spaces.space_15};
	justify-content: flex-end;
	background-color: ${themes.colors.black_200};
`;

export const OpacityAnimation = styled(Animated.View)``;

export const ContainerItems = styled.View`
	position: relative;
`;
