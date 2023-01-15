import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../styles/static';

export default StyleSheet.create({
  sectionContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
    backgroundColor: COLORS.dotin_beige,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 20,
    color: COLORS.black,
    fontFamily: FONTS.bold,
    textAlign: 'center',
  },
  subheader: {
    marginTop: 8,
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.medium,
    textAlign: 'center',
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    color: COLORS.black,
    fontFamily: FONTS.medium,
    textAlign: 'right',
  },
  cardTitle: {
    fontSize: 18,
    color: COLORS.white,
    fontFamily: FONTS.medium,
    textAlign: 'center',
  },
  backgroundStyle: {
    backgroundColor: COLORS.dotin_green,
    height: '100%',
  },
});
