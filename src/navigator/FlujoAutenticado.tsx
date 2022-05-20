import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { DetalleLocal } from '../screens/DetalleLocal';
import { HomeScreen } from '../screens/HomeScreen';
import { MapaScreen } from '../screens/MapaScreen';
import { HomeScreen_ } from '../screens/1_flujo_autenticado/0_home';
import { DetalleLocalScreen_ } from '../screens/1_flujo_autenticado/1_detalle_local';
import { MapaScreen_ } from '../screens/1_flujo_autenticado/0_mapa';

const Stack = createNativeStackNavigator();

export const FlujoAutenticado = () => {
  return (
    <Stack.Navigator>
        {/* <Stack.Screen 
            name="Home" 
            component={ HomeScreen } 
            options={{headerShown: false}} 
        /> */}
        <Stack.Screen 
            name="Home" 
            component={ HomeScreen_ } 
            options={{headerShown: false}} 
        />
        <Stack.Screen 
            name="DetalleLocal" 
            // component={ DetalleLocal } 
            component={ DetalleLocalScreen_ } 
            options={{headerShown: false}} 
        />
        <Stack.Screen 
            name="Mapa" 
            component={ MapaScreen_ } 
            options={{headerShown: false}} 
        />
        </Stack.Navigator>
  );
};
