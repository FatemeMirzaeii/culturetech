import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {COLORS, FONTS, WIDTH} from '../../styles/static';
import {List, Button, Divider} from 'react-native-paper';
import * as Progress from 'react-native-progress';

import styles from './style';
import {readData} from '../../functions';
import {useFocusEffect} from '@react-navigation/native';

const EmployeeHome = ({navigation}) => {
  const [percentage, setPercentage] = useState();

  useFocusEffect(() => {
    getProgress();
  });

  const getProgress = async () => {
    const ss = await readData('steps');
    let counter = 0;
    Object.values(JSON.parse(ss)).forEach(i => {
      i && counter++;
    });
    var percent = counter / 12;
    setPercentage(percent);
  };
  return (
    <View style={styles.sectionContainer}>
      <List.Item
        title="فاطمه میرزایی"
        description="مرکز داده - برنامه نویس بک‌اند"
        onPress={() => navigation.navigate('Checklist')}
        right={props => (
          <Progress.Circle
            progress={percentage}
            thickness={10}
            size={100}
            color={COLORS.orange}
            showsText
            textStyle={{color: COLORS.orange}}
            strokeCap="round"
          />
        )}
        titleStyle={styles.sectionDescription}
        descriptionStyle={styles.subheader}
      />
      <View
        style={{
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.description}>شروع همکاری:</Text>
        <Text style={styles.description}>1401 / 09 / 01</Text>
      </View>
      <Divider style={{margin: 10}} />
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
          labelStyle={{
            color: COLORS.black,
            fontFamily: FONTS.medium,
          }}
          onPress={() => navigation.navigate('BeforeComing')}>
          قبل از اومدن چیا باید بدونی؟
        </Button>
        <Button
          mode="contained"
          color={COLORS.white}
          style={{width: WIDTH / 3}}
          labelStyle={{color: COLORS.black, fontFamily: FONTS.medium}}
          onPress={() => navigation.navigate('AboutCo')}>
          درباره داتین
        </Button>
      </View>
      <Button
        icon="account"
        mode="contained"
        color={COLORS.white}
        style={{marginTop: 20}}
        labelStyle={{color: COLORS.black, fontFamily: FONTS.medium}}
        onPress={() => navigation.navigate('Network')}>
        مدیران مجموعه و اعضای تیم
      </Button>
    </View>
  );
};
export default EmployeeHome;
