import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

import styles from './style';

const Network = () => {
  const [isTfReady, setIsTfReady] = useState(false);
  useEffect(() => {
    checkForTfReady();
  }, []);

  const checkForTfReady = async () => {
    await tf.ready();
    setIsTfReady(true);
  };
  return (
    <SafeAreaView>
      {isTfReady && (
        <View style={styles.container}>
          <Text>Ready to gooooooo!</Text>
        </View>
      )}
    </SafeAreaView>
  );
};
export default Network;
