import { Dimensions } from 'react-native';

export const apx = (size = 0) => {
	const width = Dimensions.get('window').width;
	return (width / 750) * size;
};
