import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { DetalleLocal } from '../screens/DetalleLocal';
import { HomeScreen } from '../screens/HomeScreen';
import { MapaScreen } from '../screens/MapaScreen';
import { AuthContext } from '../context/AuthContext';
import { FlujoInicio } from './FlujoInicio';
import { FlujoAutenticado } from './FlujoAutenticado';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => {
  const { authState:{ isLoggedIn } } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {
        isLoggedIn == false
        ? <Stack.Screen 
            name="FlujoInicio" 
            component={ FlujoInicio } 
            options={{headerShown: false}} 
          />
        : null
      }
      <Stack.Screen 
        name="FlujoAutenticado" 
        component={ FlujoAutenticado } 
        options={{headerShown: false}} 
      />
    </Stack.Navigator>
  );
};
