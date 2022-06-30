import React from 'react';
import {Text, View} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {COLORS, FONTS} from '../../styles/static';
import styles from './style';

const BeforeComing = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ProgressSteps
        progressBarColor={COLORS.orange}
        activeStepIconBorderColor={COLORS.orange}
        completedProgressBarColor={COLORS.orange}
        completedStepIconColor={COLORS.orange}>
        <ProgressStep
          nextBtnText="بعدی"
          nextBtnTextStyle={{color: COLORS.orange, fontFamily: FONTS.medium}}>
          <View style={styles.progressStep}>
            <Text style={{fontFamily: FONTS.regular}}>
              ساعت کاری ما از ۸ تا ۵ بعد از ظهر هستنش اما میشه با یک ساعت انعطاف
              کار رو شروع کرد و تا ۶ ادامه داد. پنجشنبه‌ها روز کاری نیست ولی اگه
              لازم باشه با هماهنگی مدیرت میتونی بیای. لورم ایپسوم متن ساختگی با
              تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
              است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
              لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
              با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
              درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
            </Text>
          </View>
        </ProgressStep>
        <ProgressStep
          nextBtnText="بعدی"
          previousBtnText="قبلی"
          nextBtnTextStyle={{color: COLORS.orange, fontFamily: FONTS.medium}}
          previousBtnTextStyle={{
            color: COLORS.orange,
            fontFamily: FONTS.medium,
          }}>
          <View style={styles.progressStep}>
            <Text style={{fontFamily: FONTS.regular}}>لباس اینجا</Text>
          </View>
        </ProgressStep>
        <ProgressStep
          previousBtnText="قبلی"
          finishBtnText="اتمام"
          onSubmit={() => navigation.pop()}
          nextBtnTextStyle={{color: COLORS.orange, fontFamily: FONTS.medium}}
          previousBtnTextStyle={{
            color: COLORS.orange,
            fontFamily: FONTS.medium,
          }}>
          <View style={styles.progressStep}>
            <Text style={{fontFamily: FONTS.regular}}>مسیر اینجا</Text>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};
export default BeforeComing;
