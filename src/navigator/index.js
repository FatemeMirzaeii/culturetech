import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/welcome';
import EmployeeHome from '../screens/employee-home';
import AboutCo from '../screens/about-co';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="EmployeeHome" component={EmployeeHome} />
      <Stack.Screen name="AboutCo" component={AboutCo} />
    </Stack.Navigator>
  );
};
export default Navigator;
