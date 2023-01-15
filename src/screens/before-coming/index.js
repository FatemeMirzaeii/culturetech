import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {List, Checkbox, Card} from 'react-native-paper';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import MapView, {Marker} from 'react-native-maps';
import * as Animatable from 'react-native-animatable';
import {COLORS, FONTS} from '../../styles/static';
import styles from './style';

const BeforeComing = ({navigation}) => {
  const [checked, setChecked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const [wrong, setWrong] = useState(false);
  useEffect(() => {
    console.log(wrong);
  }, [wrong]);
  const dressCode = [
    {
      id: 1,
      img: require('../../../assets/images/astro.jpg'),
      isCorrect: false,
    },
    {
      id: 2,
      img: require('../../../assets/images/cas.png'),
      isCorrect: true,
    },
    {
      id: 3,
      img: require('../../../assets/images/dress.jpg'),
      isCorrect: true,
    },
    {
      id: 4,
      img: require('../../../assets/images/nimru.jpg'),
      isCorrect: false,
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: COLORS.dotin_beige}}>
      <ProgressSteps
        progressBarColor={COLORS.dotin_green}
        activeStepIconBorderColor={COLORS.dotin_green}
        completedProgressBarColor={COLORS.dotin_green}
        completedStepIconColor={COLORS.dotin_green}>
        <ProgressStep
          nextBtnText="بعدی"
          nextBtnTextStyle={{
            color: COLORS.dotin_green,
            fontFamily: FONTS.medium,
          }}>
          <View style={styles.progressStep}>
            <Text
              style={{
                color: COLORS.black,
                fontFamily: FONTS.regular,
                padding: 20,
                textAlign: 'center',
                marginTop: 100,
              }}>
              فاطمه عزیز سلام!
              {'\n'}
              خوشحالیم که قرار هست از این پس نام شما رو در بین همکاران مجموعه‌ی
              داتین ببینیم، در کنار هم بیشتر یاد بگیریم و اتفاقات جدیدی رو رقم
              بزنیم.
              {'\n'}
              در روز اول شروع به کار خود، در تاریخ یکشنبه 5 تیر ساعت ۹:۰۰ به
              ترتیب جهت:
              {'\n'}* عقد قرارداد : طبقه 2 جنوبی واحد امور توسعه سرمایه های
              انسانی - بخش کارگزینی
              {'\n'}* تحویل اکانت سیستم : طبقه 7 جنوبی واحد فناوری اطلاعات
              {'\n'}* محل استقرار :طبقه 7 جنوبی واحد/بخش : مرکز داده
              {'\n'}مراجعه کنید.
              {'\n'}
              مدیر مستقیم : ...
              {'\n'}
              همراه فنی: ...
            </Text>
          </View>
        </ProgressStep>
        <ProgressStep
          nextBtnText="بعدی"
          previousBtnText="قبلی"
          nextBtnTextStyle={{
            color: COLORS.dotin_green,
            fontFamily: FONTS.medium,
          }}
          previousBtnTextStyle={{
            color: COLORS.dotin_green,
            fontFamily: FONTS.medium,
          }}>
          <View style={styles.progressStep}>
            <View style={styles.mapContainer}>
              <List.Item
                title="آدرس ما: تهران، خیابان نلسون ماندلا، خیابان ناهید شرقی، پلاک
                  33"
                titleNumberOfLines={2}
                titleStyle={{
                  color: COLORS.black,
                  fontFamily: FONTS.regular,
                  textAlign: 'right',
                }}
                right={props => (
                  <List.Icon {...props} icon="map-marker-outline" />
                )}
              />
              <MapView
                style={styles.mapStyle}
                zoomEnabled
                initialRegion={{
                  latitude: 35.777632919304054,
                  longitude: 51.42643565711723,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}>
                <Marker
                  coordinate={{
                    latitude: 35.777632919304054,
                    longitude: 51.42643565711723,
                  }}
                  title={'داتیس آرین قشم (داتین)'}
                  description={'ساختمان ناهید'}
                />
              </MapView>
              <List.Item
                title="پارک فناوری پردیس، خیابان نوآوری ۱۱"
                titleStyle={{
                  color: COLORS.black,
                  fontFamily: FONTS.regular,
                  textAlign: 'right',
                }}
                right={props => (
                  <List.Icon {...props} icon="map-marker-outline" />
                )}
              />
              <MapView
                style={styles.mapStyle}
                zoomEnabled
                initialRegion={{
                  latitude: 35.728172491515224,
                  longitude: 51.826356480798076,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}>
                <Marker
                  coordinate={{
                    latitude: 35.728172491515224,
                    longitude: 51.826356480798076,
                  }}
                  title={'داتیس آرین قشم (داتین)'}
                  description={'ساختمان پارک فناوری پردیس'}
                />
              </MapView>
            </View>
          </View>
        </ProgressStep>
        <ProgressStep
          previousBtnText="قبلی"
          finishBtnText="اتمام"
          onSubmit={() => navigation.pop()}
          nextBtnTextStyle={{
            color: COLORS.dotin_green,
            fontFamily: FONTS.medium,
          }}
          previousBtnTextStyle={{
            color: COLORS.dotin_green,
            fontFamily: FONTS.medium,
          }}>
          <View style={styles.progressStep}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              {dressCode.map((d, i) => (
                <Animatable.View
                  key={d.id}
                  animation={wrong ? 'swing' : undefined}
                  onAnimationEnd={() => setWrong(false)}>
                  <Card
                    style={{
                      width: 150,
                      height: 240,
                      margin: 5,
                      backgroundColor: COLORS.dotin_beige,
                    }}>
                    <Card.Cover source={d.img} />
                    <Card.Actions>
                      <Checkbox
                        status={checked[d.id] ? 'checked' : 'unchecked'}
                        color={COLORS.dotin_green}
                        onPress={() => {
                          if (d.isCorrect) {
                            setChecked({...checked, [d.id]: !checked[d.id]});
                          } else {
                            setWrong(true);
                          }
                        }}
                      />
                    </Card.Actions>
                  </Card>
                </Animatable.View>
              ))}
            </View>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};
export default BeforeComing;
