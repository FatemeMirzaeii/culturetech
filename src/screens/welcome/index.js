import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {COLORS, FONTS} from '../../styles/static';
import {Button} from 'react-native-paper';
import styles from './style';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionDescription}>به تپسی خوش‌آمدی!</Text>
        <Text style={styles.sectionDescription}>
          خیلی خوشحالیم که اینجا میبینیمت!{'\n'}امیدواریم روزها و موفقیت‌های
          خوبی رو کنار هم داشته باشیم.{'\n'}آماده‌ای سفرتو با ما شروع کنی؟
        </Text>
        <Button
          icon="account"
          mode="contained"
          color={COLORS.white}
          labelStyle={{color: COLORS.orange, fontFamily: FONTS.medium}}
          onPress={() => navigation.navigate('EmployeeHome')}>
          بریم!
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default Welcome;
