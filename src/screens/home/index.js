import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {COLOR, FONT} from '../../styles/static';
import {Button} from 'react-native-paper';
import styles from './style';

const Home = () => {
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
          color={COLOR.white}
          labelStyle={{color: COLOR.orange, fontFamily: FONT.medium}}
          onPress={() => console.log('Pressed')}>
          بریم!
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default Home;
