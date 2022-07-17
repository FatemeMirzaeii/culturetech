import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../styles/static';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    padding: 10,
  },
  textStyle: {
    fontFamily: FONTS.regular,
    textAlign: 'right',
  },
});
