import {StyleSheet} from 'react-native';
import {COLOR, FONT} from '../../styles/static';

export default StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: COLOR.white,
    fontFamily: FONT.bold,
    textAlign: 'center',
  },
  backgroundStyle: {
    backgroundColor: COLOR.orange,
    height: '100%',
  },
});
