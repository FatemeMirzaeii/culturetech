import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Divider, Checkbox} from 'react-native-paper';
import {readData, saveData} from '../../functions';
import {COLORS} from '../../styles/static';
import styles from './style';

const Checklist = ({navigation}) => {
  const [stepsStatus, setStepsStatus] = React.useState({});
  const steps = [
    {
      id: 1,
      text: 'تماس همراه فنی',
    },
    {
      id: 2,
      text: 'دریافت ایمیل فایل‌های آموزشی',
    },
    {
      id: 3,
      text: 'امضای قرارداد',
    },
    {
      id: 4,
      text: 'معارفه با اعضای تیم',
    },
    {
      id: 5,
      text: 'ناهار دوستانه با همراه فنی',
    },
    {
      id: 6,
      text: 'دریافت ولکام پکیج',
    },
    {
      id: 7,
      text: 'جلسه آنبوردینگ',
    },
    {
      id: 8,
      text: 'دریافت مستندات آشنایی با سازمان',
    },
    {
      id: 9,
      text: 'پکیج دوره آموزشی پذیرش سازمانی',
    },
    {
      id: 10,
      text: 'ارزیابی عملکرد ۳ ماهه',
    },
    {
      id: 11,
      text: 'تدوین اهداف عملکردی',
    },
    {
      id: 12,
      text: 'شرکت در نظرسنجی خودارزیابی',
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await readData('steps');
    setStepsStatus(JSON.parse(data) ?? {});
  };
  return (
    <SafeAreaView style={styles.container}>
      {steps.map(i => (
        <View key={i.id}>
          <Checkbox.Item
            label={i.text}
            labelStyle={styles.textStyle}
            color={COLORS.dotin_green}
            status={stepsStatus[i.id] ? 'checked' : 'unchecked'}
            onPress={() => {
              const ss = {...stepsStatus, [i.id]: !stepsStatus[i.id]};
              setStepsStatus(ss);
              saveData('steps', JSON.stringify(ss));
            }}
          />
          <Divider />
        </View>
      ))}
    </SafeAreaView>
  );
};
export default Checklist;
