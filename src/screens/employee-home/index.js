import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {COLORS, FONTS, WIDTH} from '../../styles/static';
import {Button, Divider, Avatar} from 'react-native-paper';
import styles from './style';

const EmployeeHome = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <Avatar.Icon
          size={200}
          icon="account"
          style={{alignSelf: 'center', backgroundColor: COLORS.orange}}
          color={COLORS.white}
        />
        <Text style={styles.sectionDescription}>فاطمه میرزایی</Text>
        <Text style={styles.subheader}>برنامه‌نویس بک‌اند</Text>
        <Text style={styles.description}>شروع همکاری:</Text>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            width: WIDTH * 0.9,
            height: 75,
            justifyContent: 'space-around',
          }}>
          <Button
            mode="contained"
            color={COLORS.white}
            style={{width: WIDTH / 3}}
            labelStyle={{color: COLORS.black, fontFamily: FONTS.medium}}
            onPress={() => navigation.navigate('BeforeComing')}>
            قبل از اومدن چیا باید بدونی؟
          </Button>
          <Button
            mode="contained"
            color={COLORS.white}
            style={{width: WIDTH / 3}}
            labelStyle={{color: COLORS.black, fontFamily: FONTS.medium}}
            onPress={() => navigation.navigate('AboutCo')}>
            درباره شرکت
          </Button>
        </View>
        <Button
          icon="account"
          mode="contained"
          color={COLORS.white}
          style={{marginTop: 20}}
          labelStyle={{color: COLORS.black, fontFamily: FONTS.medium}}
          onPress={() => console.log('Pressed')}>
          مدیران مجموعه و اعضای تیم
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default EmployeeHome;
