import React from 'react';
import {View} from 'react-native';
import Pdf from 'react-native-pdf';
import styles from './style';

const AboutCo = () => {
  const source = {uri: 'bundle-assets://dotin.pdf', cache: true};
  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </View>
  );
};
export default AboutCo;
