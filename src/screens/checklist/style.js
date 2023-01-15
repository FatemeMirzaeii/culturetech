import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../styles/static';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.dotin_beige,
  },
  textStyle: {
    fontFamily: FONTS.regular,
    textAlign: 'right',
  },
});
