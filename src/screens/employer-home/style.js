import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../styles/static';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.dotin_beige,
  },
  fab: {
    backgroundColor: COLORS.dotin_green,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  textStyle: {
    color: COLORS.black,
    fontFamily: FONTS.regular,
    textAlign: 'right',
  },
  list: {padding: 25},
});
