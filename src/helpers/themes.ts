import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const width = {
	max_width_800: 800,
	max_width_500: 500,
};

export const borderRadius = {
	radius_10: 10,
	radius_15: 15,
	radius_25: 25,
};

export const spaces = {
	horizontal: {
		xs: wp('2%'),
		s: wp('3%'),
		m: wp('4%'),
		l: wp('5%'),
	},
	vertical: {
		xs: hp('1%'),
		s: hp('2%'),
		m: hp('3%'),
		l: hp('4%'),
	},
};

export const fontSizes = {
	xs: '2.5%',
	s: '3%',
	m: '3.5%',
	l: '4.5%',
	xl: '5%',
	xxl: '6.5%',
	xxxl: '7.6%',
};

export const colors = {
	white: '#FFFFFF',
	white_10pct: 'rgba(255, 255, 255, 0.10)',
	green: '#ACD9A8',
	red: '#E17C7C',
	light_cyan: '#B4C9FF',
	dark_cyan: '#3E4454',
	black_100: '#191B1F',
	black_000: '#222329',
	light_grey: '#BFBFBF',
	dark_grey: '#616670',
	black_100_50pct: 'rgba(25, 27, 31, 0.50)',
	transparent: 'transparent',
};

export const scaffold = {
	page_space_horizontal: wp('5%'),
	header_space_horizontal: wp('3%'),
};
