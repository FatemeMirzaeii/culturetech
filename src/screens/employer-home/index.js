import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {readData} from '../../functions';
import {useFocusEffect} from '@react-navigation/native';
import {List, FAB, Divider} from 'react-native-paper';
import * as Progress from 'react-native-progress';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {COLORS, FONTS} from '../../styles/static';
import styles from './style';

const EmployerHome = ({navigation}) => {
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
  const sheetRef = React.useRef(null);
  const renderContent = () => (
    <View
      style={{
        backgroundColor: COLORS.dotin_beige,
        padding: 16,
        height: '100%',
      }}>
      <Text>فعلا چیزی نیست!</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <List.Section style={styles.list}>
        <List.Subheader style={styles.textStyle}>
          داشبورد منابع انسانی
        </List.Subheader>
        <List.Item
          title="فاطمه میرزایی"
          description="مرکز داده"
          onPress={() => navigation.navigate('Checklist')}
          left={props => (
            <Progress.Circle
              progress={percentage}
              thickness={6}
              size={100}
              color={COLORS.dotin_green}
              showsText
              textStyle={{color: COLORS.dotin_green}}
              strokeCap="round"
            />
          )}
          titleStyle={styles.textStyle}
          descriptionStyle={styles.textStyle}
        />
      </List.Section>
      <Divider />
      <BottomSheet
        ref={sheetRef}
        snapPoints={[700, 300, 0]}
        borderRadius={25}
        renderContent={renderContent}
        initialSnap={2}
        enabledBottomInitialAnimation
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => sheetRef.current.snapTo(0)}
      />
    </SafeAreaView>
  );
};
export default EmployerHome;
