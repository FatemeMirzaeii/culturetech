import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../styles/static';

export default StyleSheet.create({
  container: {flex: 1},
  fab: {
    backgroundColor: COLORS.orange,
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
