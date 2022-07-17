import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {List, FAB, Divider} from 'react-native-paper';
import * as Progress from 'react-native-progress';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {COLORS, FONTS} from '../../styles/static';
import styles from './style';

const EmployerHome = ({navigation}) => {
  const sheetRef = React.useRef(null);
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: '100%',
      }}>
      <Text>Swipe down to close</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <List.Section style={styles.list}>
        <List.Subheader style={styles.textStyle}>آنبوردینگ</List.Subheader>
        <List.Item
          title="فاطمه میرزایی"
          description="مرکز داده"
          onPress={() => navigation.navigate('Checklist')}
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
