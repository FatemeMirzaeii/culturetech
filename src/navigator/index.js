import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/welcome';
import EmployeeHome from '../screens/employee-home';
import AboutCo from '../screens/about-co';
import BeforeComing from '../screens/before-coming';
import EmployerHome from '../screens/employer-home';
import Checklist from '../screens/checklist';
import Login from '../screens/login';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="EmployeeHome" component={EmployeeHome} />
      <Stack.Screen name="EmployerHome" component={EmployerHome} />
      <Stack.Screen name="BeforeComing" component={BeforeComing} />
      <Stack.Screen name="Checklist" component={Checklist} />
      <Stack.Screen name="AboutCo" component={AboutCo} />
    </Stack.Navigator>
  );
};
export default Navigator;
