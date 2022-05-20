import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BienvenidaScreen } from '../screens/0_inicio/0_bienvenida';
import { SignInScreen } from '../screens/0_inicio/1_signIn';
import { RegisterScreen } from '../screens/0_inicio/1_register';

const Stack = createNativeStackNavigator();

export const FlujoInicio = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name="Bienvenida" 
            component={ BienvenidaScreen } 
            options={{headerShown: false}} 
        />
        <Stack.Screen 
            name="SignIn" 
            component={ SignInScreen } 
            options={{headerShown: false}} 
        />
        <Stack.Screen 
            name="Register" 
            component={ RegisterScreen } 
            options={{headerShown: false}} 
        />
        </Stack.Navigator>
  );
};
