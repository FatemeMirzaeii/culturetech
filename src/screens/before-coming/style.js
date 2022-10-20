import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, FONTS} from '../../styles/static';

export default StyleSheet.create({
  progressStep: {alignItems: 'center'},
  mapContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  mapStyle: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height / 3,
    alignSelf: 'center',
  },
});
