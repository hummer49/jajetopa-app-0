import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { dummy_latitude, dummy_longitude } from '../../raw_data/DummyData';


import { match_item_model } from '../interfaces/MainInterfaces';
import { GeneralStyles } from '../theme/GeneralTheme';


interface Props extends NativeStackScreenProps <any, any>{};

export const MapaScreen = ( { navigation, route: {params} }:Props  ) => {

  const data: match_item_model [] = params!.data;

  useEffect(
    () => {
      navigation.setOptions({
        title: params!.data.name
      })
    }, []
  )
  


  return (
    <View style={{...GeneralStyles.main_container, justifyContent: 'flex-end', alignItems: 'center' }}>
      <Text 
        style={{ 
          fontSize: 40 
        }}
        onPress={ () => { console.log(`DATA:: ${JSON.stringify(data.map(i => i.location), null, 4)}`) } }
      > 
        {`MAPA`}
      </Text>
      <View
        style={{
          height: '85%',
          width: '95%',
          justifyContent: 'center',
          alignItems: 'center'
        }} 
      > 
        <MapView 
          style={{
            height: '95%',
            width: '95%'
          }} 
          initialRegion={{
            latitude: dummy_latitude,
            longitude: dummy_longitude,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2
          }}
        >
          {
            data.map(
              (item) => 
                <Marker
                  key={item.id}
                  coordinate={{
                    latitude: item.location.latitude, 
                    longitude: item.location.longitude
                  }}
                  >
                  <Callout
                    tooltip={ false }
                    onPress={ () => {
                      for(let i: number = 0; i < 100000000; i++);       // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA. No 
                      Linking.openURL(
                        `https://www.google.com/maps/search/?api=1&query=${item.location.latitude},${item.location.longitude}`
                      )
                    }}
                  >
                    <View
                      style={{
                        height: 80,
                        backgroundColor: 'white'
                      }}
                    >
                      <Text> { item.name }</Text>
                      <Text
                        style={{ 
                          color: 'blue' 
                        }}
                      > { `Abrir en Maps` }</Text>
                    </View>
                  </Callout>
                  {/* <Text> { item.name }</Text> */}
                </Marker>
            )
          }
          <Marker
            coordinate={{
              latitude: dummy_latitude, 
              longitude: dummy_longitude
            }}
            pinColor= 'rgba(21,43,88,0.9)'
          >
            <Callout>
              <Text> {`YO`}</Text>
            </Callout>
          </Marker>
        </MapView>
      </View>
    </View>
  );
};
