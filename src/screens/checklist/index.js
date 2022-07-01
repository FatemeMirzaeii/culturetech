import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {List, FAB, Checkbox} from 'react-native-paper';
import {COLORS, FONTS} from '../../styles/static';
import styles from './style';

const Checklist = ({navigation}) => {
  const [value, setValue] = React.useState(true);
  const [value2, setValue2] = React.useState(true);
  const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {/* <List.Item
        title="هماهنگی میز"
        // description="مرکز داده"
        // onPress={() => navigation.navigate('Checklist')}
        left={props => <RadioButton.Item label="First item" value="first" />}
        // style={{backgroundColor: 'red'}}
        titleStyle={{fontFamily: FONTS.medium}}
        descriptionStyle={{fontFamily: FONTS.regular}}
      /> */}
      <Checkbox.Item
        label="هماهنگی اتاق یا میز"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Checkbox.Item
        label="هماهنگی سیستم"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Checkbox.Item
        label="دسترسی اکانت‌ها"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Checkbox.Item
        label="ارسال دعوتنامه به کانال ها و گروه ها"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Checkbox.Item
        label="ارسال بروشورها"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Checkbox.Item
        label="ولکام پکیج"
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
    </SafeAreaView>
  );
};
export default Checklist;
