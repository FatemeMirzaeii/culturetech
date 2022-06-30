import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {List, FAB} from 'react-native-paper';
import * as Progress from 'react-native-progress';
import {COLORS, FONTS} from '../../styles/static';
import styles from './style';

const EmployerHome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <List.Item
        title="فاطمه میرزایی"
        description="مرکز داده"
        left={props => (
          <Progress.Circle
            progress={0.4}
            thickness={6}
            size={50}
            color={COLORS.orange}
            showsText
            textStyle={{color: COLORS.orange}}
            strokeCap="round"
          />
        )}
        // style={{backgroundColor: 'red'}}
        titleStyle={{fontFamily: FONTS.medium}}
        descriptionStyle={{fontFamily: FONTS.regular}}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => console.log('Pressed')}
      />
    </SafeAreaView>
  );
};
export default EmployerHome;
