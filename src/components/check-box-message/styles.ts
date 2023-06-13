import { themes } from '@src/themes';
import Checkbox from 'expo-checkbox';
import styled from 'styled-components/native';

export const CheckBoxMessageContainer = styled.View`
	flex-direction: row;
	align-items: center;
	margin-top: ${themes.spaces.space_15};
`;

export const Check = styled(Checkbox)`
	width: 18px;
	height: 18px;
`;
