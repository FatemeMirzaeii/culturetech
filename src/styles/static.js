import {Dimensions} from 'react-native';

export const WIDTH = Math.round(Dimensions.get('window').width);

export const HEIGHT = Math.round(Dimensions.get('window').height);

export const COLORS = {
  white: '#FFFFFF',
  black: '#111111',
  orange: '#FF9900',
  dotin_green: '#1D7453',
  dotin_beige: '#fff9e7',
  // dotin_beige: '#fbf3d4',
};

export const FONTS = {
  regular: 'IRANSansMobile(FaNum)',
  medium: 'IRANSansMobile(FaNum)_Medium',
  bold: 'IRANSansMobile(FaNum)_Bold',
  light: 'IRANSansMobile(FaNum)_Light',
  ultra_light: 'IRANSansMobile(FaNum)_UltraLight',
  black: 'IRANSansMobile(FaNum)_Black',
};
