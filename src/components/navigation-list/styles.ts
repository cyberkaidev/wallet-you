import { themes } from '@src/themes';
import styled from 'styled-components/native';

export const NavigationListContainer = styled.View``;

export const ItemButton = styled.TouchableOpacity`
	padding: ${themes.spaces.space_15} 0;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
