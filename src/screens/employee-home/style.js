import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../styles/static';

export default StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.black,
    fontFamily: FONTS.bold,
    textAlign: 'center',
  },
  backgroundStyle: {
    backgroundColor: COLORS.orange,
    height: '100%',
  },
});
