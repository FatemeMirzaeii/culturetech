import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../styles/static';

export default StyleSheet.create({
  safeAreaView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.dotin_beige,
  },
  card: {
    flex: 1,
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: '80%',
    marginTop: '40%',
    justifyContent: 'space-between',
    borderRadius: 20,
    maxHeight: 380,
    padding: '10%',
  },
  heading: {
    fontFamily: FONTS.bold,
    fontSize: 30,
    marginLeft: '10%',
    marginTop: '5%',
    marginBottom: '30%',
    color: COLORS.dotin_green,
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: '5%',
  },
  inputs: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dotin_green,
    paddingTop: 10,
    fontSize: 16,
    minHeight: 40,
  },
  button: {
    width: '80%',
    backgroundColor: COLORS.dotin_green,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.medium,
  },
  message: {
    fontSize: 16,
    marginVertical: '5%',
  },
});
