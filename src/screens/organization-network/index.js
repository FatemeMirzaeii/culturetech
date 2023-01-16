import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// import * as tf from '@tensorflow/tfjs';
// import '@tensorflow/tfjs-react-native';
import communities from '../../../assets/communities';
import teams from '../../../assets/teams.json';

import styles from './style';

const Network = () => {
  const [network, setNetwork] = useState([]);

  // const [isTfReady, setIsTfReady] = useState(false);
  // useEffect(() => {
  //   checkForTfReady();
  // }, []);

  // const checkForTfReady = async () => {
  //   await tf.ready();
  //   setIsTfReady(true);
  // };

  const getColleagues = team => {
    // const issues = jira.issues;
    // let colleagues = [];
    // issues.forEach(issue => {
    //   const fields = issue.fields;
    //   if (!fields.assignee) {
    //     return;
    //   }
    //   if (
    //     fields.project.name === team &&
    //     !colleagues.find(c => c === fields.assignee.displayName)
    //   ) {
    //     colleagues.append(fields.assignee.displayName);
    //   }
    // });
    return teams[team];
  };

  const getCommunities = (colleagues, communitties) => {
    let comms = [];
    communitties.forEach(community => {
      colleagues.forEach(colleague => {
        if (
          community.find(
            c => c === colleague && !comms.find(f => f === community),
          )
        ) {
          comms.push(community);
        }
      });
    });
    return comms;
  };
  useEffect(() => {
    let colleagues = getColleagues('Middleware Operation');
    console.log('colleagues', colleagues);
    let cccc = getCommunities(colleagues, communities);
    setNetwork(cccc);
    console.log('cccc', cccc);
  }, []);
  return (
    <ScrollView style={styles.container}>
      {network.map(n => n.map(a => <Text>{a}</Text>))}
    </ScrollView>
  );
};
export default Network;
