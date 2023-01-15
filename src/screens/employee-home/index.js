import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {COLORS, HEIGHT, WIDTH} from '../../styles/static';
import {List, Divider, Card} from 'react-native-paper';
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
      <TouchableOpacity onPress={() => navigation.navigate('Checklist')}>
        <Progress.Circle
          progress={percentage}
          thickness={10}
          size={150}
          color={COLORS.dotin_green}
          showsText
          style={{alignSelf: 'center'}}
          textStyle={{color: COLORS.dotin_green}}
          strokeCap="round"
        />
      </TouchableOpacity>
      <List.Item
        title="فاطمه میرزایی"
        description="مرکز داده - برنامه نویس بک‌اند"
        onPress={() => navigation.navigate('Checklist')}
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
          flexDirection: 'row-reverse',
          width: WIDTH * 0.9,
          height: HEIGHT / 2.5,
          justifyContent: 'space-between',
        }}>
        <Card
          style={{backgroundColor: COLORS.dotin_green, width: WIDTH / 2.3}}
          onPress={() => navigation.navigate('BeforeComing')}>
          <Card.Cover
            style={{
              resizeMode: 'contain',
              marginTop: 5,
              width: 160,
              height: 275,
              alignSelf: 'center',
            }}
            source={require('../../../assets/images/befor.png')}
          />
          <Card.Title titleStyle={styles.cardTitle} title="قبل از اومدن " />
        </Card>
        <View style={{width: WIDTH / 2.3, justifyContent: 'space-between'}}>
          <Card
            style={{
              backgroundColor: COLORS.dotin_green,
            }}
            onPress={() => navigation.navigate('Network')}>
            <Card.Cover
              style={{
                resizeMode: 'contain',
                marginTop: 5,
                width: 160,
                height: 100,
                alignSelf: 'center',
              }}
              source={require('../../../assets/images/colleague.png')}
            />
            <Card.Title titleStyle={styles.cardTitle} title="همکاران" />
          </Card>
          <Card
            onPress={() => navigation.navigate('AboutCo')}
            style={{backgroundColor: COLORS.dotin_green}}>
            <Card.Cover
              style={{
                resizeMode: 'contain',
                marginTop: 5,
                width: 160,
                height: 100,
                alignSelf: 'center',
              }}
              source={require('../../../assets/images/about.png')}
            />
            <Card.Title titleStyle={styles.cardTitle} title="درباره داتین" />
          </Card>
        </View>
      </View>
    </View>
  );
};
export default EmployeeHome;
