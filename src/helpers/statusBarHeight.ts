import Constants from 'expo-constants';
import { Platform } from 'react-native';

export const statusBarHeight = Platform.OS === 'android' ? 0 : Constants.statusBarHeight;
