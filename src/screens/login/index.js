import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {readData, saveData} from '../../functions';
import {COLORS} from '../../styles/static';
import styles from './style';

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, SetIsLoading] = useState(false);
  const [path, setPath] = useState(false);

  const onLoggedIn = async token => {
    saveData('token', token);
    const val = await readData('welcome');
    if (val === 'true') {
      setPath('EmployeeHome');
    } else {
      setPath('Welcome');
    }
    // fetch(`${API_URL}/private`, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    //   .then(async res => {
    //     try {
    //       const jsonRes = await res.json();
    //       if (res.status === 200) {
    //         setMessage(jsonRes.message);
    //       }
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  };

  const onSubmitHandler = () => {
    SetIsLoading(true);
    console.log('pressssssssssed');
    const payload = {
      email,
      password,
    };
    fetch('http://10.0.2.2:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          console.log('res', jsonRes);
          if (res.status !== 200) {
            setIsError(true);
            setMessage(jsonRes.message);
          } else {
            onLoggedIn(jsonRes.token);
            navigation.navigate(path); //todo: should check role then make redirect.
            setIsError(false);
            setMessage(jsonRes.message);
          }
          SetIsLoading(false);
        } catch (err) {
          console.log(err);
          SetIsLoading(false);
        }
      })
      .catch(err => {
        console.log(err);
        SetIsLoading(false);
      });
  };

  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.card}>
        <Text style={styles.heading}>ورود</Text>
        <View style={styles.form}>
          <View style={styles.inputs}>
            <TextInput
              style={styles.input}
              placeholder="ایمیل"
              autoCapitalize="none"
              onChangeText={setEmail}
            />
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="رمز"
              onChangeText={setPassword}
            />
            <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>
              {message ? getMessage() : null}
            </Text>
            {isLoading ? (
              <ActivityIndicator size="large" color={COLORS.orange} />
            ) : (
              <TouchableOpacity style={styles.button} onPress={onSubmitHandler}>
                <Text style={styles.buttonText}>ورود</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
