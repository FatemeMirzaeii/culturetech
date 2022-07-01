import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Platform} from 'react-native';
import styles from './style';

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:3000' : 'http://10.0.2.2:3000';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const onLoggedIn = token => {
    fetch(`${API_URL}/private`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          if (res.status === 200) {
            setMessage(jsonRes.message);
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onSubmitHandler = () => {
    const payload = {
      email,
      password,
    };
    fetch(`${API_URL}/'login'`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            setIsError(true);
            setMessage(jsonRes.message);
          } else {
            onLoggedIn(jsonRes.token);
            setIsError(false);
            setMessage(jsonRes.message);
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
  };

  return (
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
          <TouchableOpacity style={styles.button} onPress={onSubmitHandler}>
            <Text style={styles.buttonText}>ورود</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Login;
