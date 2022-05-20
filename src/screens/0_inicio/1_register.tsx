import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, TextInput} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthContext } from '../../context/AuthContext';

interface Props extends NativeStackScreenProps <any, any> {};

interface new_user_data_props {
  user_name: string;
  email: string;
  password: string;
}

const user_login = (user:string, password:string):boolean => {
  return user === 'user' && password === 'password';
}

export const RegisterScreen = ( { navigation }:Props ) => {
  const [userData, setUserData] = useState<new_user_data_props>({
    user_name: '',
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return(
    <View
      style={ styles.main_container }
    >
      {/* ------------------------------------------------- */}
      <View
          style={{
            ...styles.top_box,
            justifyContent: 'center'
          }}
      >
        <View>
          <MaterialCommunityIcons 
            name='chevron-left' 
            size={ 40 } 
            color='black' 
            onPress={ () => navigation.navigate('Bienvenida') }
          />
        </View>
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
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image 
            source={require('../../../assets/jajetopa_logo_fit.png')}
            style={{
              width: 80,
              height: 80
            }}
          />
          <SafeAreaView
            style={{
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <TextInput
              style={styles.input}
              onChangeText={ text => setUserData({...userData, user_name:text}) }
              value={ userData.user_name }
              placeholder= 'usuario'
              autoCapitalize='none'
            />
            <TextInput
              style={styles.input}
              onChangeText={ text => setUserData({...userData, email:text}) }
              value={ userData.email }
              placeholder= 'email'
              autoCapitalize='none'
            />
            <TextInput
              style={styles.input}
              onChangeText={ text => setUserData({...userData, password:text}) }
              value={ userData.password }
              placeholder= 'contraseña'
              secureTextEntry={ !showPassword }
              autoCapitalize='none'
            />
            <Text
              onPress={ () => setShowPassword(!showPassword) }
            >
              {showPassword === true ? 'ocultar' : 'mostrar'}
            </Text>
          </SafeAreaView>
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
            onPress={ () => { 
              if(
                    userData.user_name !== ''
                &&  userData.email !== ''
                &&  userData.password !== ''
              ){
                navigation.navigate('SignIn');
              }
            }}
          >
            <Text
              style={{
                ...styles.button_1_text,
                color: COLORES.blanco_1
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly'
          }}
        >
          <Text>
            {`Ingresar`}
          </Text>
          <Text>
            {`Recuperar contraseña`}
          </Text>
        </View>
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
    fontSize: 40
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
    fontSize: 20
  },
  input: {
    minHeight: 40, maxHeight: 60 ,
    width: '70%',
    paddingLeft: 20,
    borderWidth: 1,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 20,
    marginVertical: 15
  },
});

const COLORES = {
  lila_1: 'rgba(141,83,255,1)',
  blanco_1: 'rgba(255,255,255,1)'
}