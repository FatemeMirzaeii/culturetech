import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {List, Divider, Checkbox} from 'react-native-paper';
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
        labelStyle={styles.textStyle}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Divider />
      <Checkbox.Item
        label="هماهنگی سیستم"
        labelStyle={styles.textStyle}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Divider />
      <Checkbox.Item
        label="دسترسی اکانت‌ها"
        labelStyle={styles.textStyle}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Divider />
      <Checkbox.Item
        label="ارسال دعوتنامه به کانال ها و گروه ها"
        labelStyle={styles.textStyle}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Divider />
      <Checkbox.Item
        label="ارسال بروشورها"
        labelStyle={styles.textStyle}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Divider />
      <Checkbox.Item
        label="ولکام پکیج"
        labelStyle={styles.textStyle}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
    </SafeAreaView>
  );
};
export default Checklist;
