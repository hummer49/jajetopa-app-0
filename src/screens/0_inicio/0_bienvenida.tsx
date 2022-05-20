import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

interface Props extends NativeStackScreenProps <any, any>{};

export const BienvenidaScreen = ( { navigation }:Props ) => {
  return(
    <View
      style={ styles.main_container }
    >
      {/* ------------------------------------------------- */}
      <View
          style={{
            ...styles.top_box,
          }}
      >
      </View>
      {/* ------------------------------------------------- */}
      <View
          style={{
          ...styles.middle_box,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image 
            source={require('../../../assets/jajetopa_logo_fit.png')}
            style={{
              width: 80,
              height: 80,
              margin: 30
            }}
          />
          <Text
            style={{ 
              ...styles.title_1,
              fontSize: 40,
              textAlign: 'center'
            }}
          >
            {`proyecto`}
          </Text>
          <Text
            style={{ 
              ...styles.title_1,
              textAlign: 'center'
            }}
          >
            {`JAJETOPA`}
          </Text>
        </View>
        <View
          style={{
            height: '30%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            style={{
              ...styles.button_1_box,
              backgroundColor: COLORES.lila_1,
              borderWidth: 0
            }}
            onPress={ () => { navigation.navigate('SignIn')} }
          >
            <Text
              style={{
                ...styles.button_1_text,
                color: COLORES.blanco_1
              }}
            >
              {`Ingresar`}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button_1_box,
              borderColor: COLORES.lila_1
            }}
            onPress={ () => { navigation.navigate('Register')} }
          >
            <Text
              style={{
                ...styles.button_1_text,
                color: COLORES.lila_1
              }}
            >
              {`Registrarse`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ------------------------------------------------- */}
      <View
        style={{
          ...styles.bottom_box
        }}
      >
      </View>
      {/* ------------------------------------------------- */}
    </View>
  );
};


const styles = StyleSheet.create({
  main_container:{
    height: '100%',
    width: '100%',
  },
  top_box: {
    height: '25%',
    width: '100%'
  },
  middle_box: {
    height: '60%',
    width: '100%'
  },
  bottom_box: {
    height: '15%',
    width: '100%'
  },
  title_1: {
    fontFamily: 'monospace',
    fontSize:50,
    letterSpacing: 10
  },
  title_2: {
    fontSize: 24
  },
  button_1_box: {
    height: 'auto',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5
  },
  button_1_text:{
    fontSize: 20,
    fontWeight: 'bold',
  }
});

const COLORES = {
  lila_1: 'rgba(141,83,255,1)',
  blanco_1: 'rgba(255,255,255,1)'
}