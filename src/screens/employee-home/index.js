import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {COLORS, FONTS} from '../../styles/static';
import {Button} from 'react-native-paper';
import styles from './style';

const EmployeeHome = () => {
  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionDescription}>فاطمه میرزایی</Text>
        <Text style={styles.sectionDescription}>برنامه‌نویس بک‌اند</Text>
        <Text style={styles.sectionDescription}>شروع همکاری:</Text>
        <Button
          icon="account"
          mode="contained"
          color={COLORS.white}
          labelStyle={{color: COLORS.black, fontFamily: FONTS.medium}}
          onPress={() => console.log('Pressed')}>
          قبل از اومدن چیا باید بدونی؟
        </Button>
        <Button
          icon="account"
          mode="contained"
          color={COLORS.white}
          labelStyle={{color: COLORS.black, fontFamily: FONTS.medium}}
          onPress={() => console.log('Pressed')}>
          درباره شرکت
        </Button>
        <Button
          icon="account"
          mode="contained"
          color={COLORS.white}
          labelStyle={{color: COLORS.black, fontFamily: FONTS.medium}}
          onPress={() => console.log('Pressed')}>
          مدیران مجموعه و اعضای تیم
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default EmployeeHome;
