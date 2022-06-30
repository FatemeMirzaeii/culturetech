import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/welcome';
import EmployeeHome from '../screens/employee-home';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="EmployeeHome" component={EmployeeHome} />
    </Stack.Navigator>
  );
};
export default Navigator;
