import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Linking} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { dummy_latitude, dummy_longitude } from '../../../raw_data/DummyData';


import { match_item_model } from '../../interfaces/MainInterfaces';

// solucionar

import { TopAppBar } from '../../components/top_app_bar';


interface Props extends NativeStackScreenProps <any, any>{};

export const MapaScreen_ = ( { navigation, route: {params} }:Props  ) => {

  const data: match_item_model[] = params!.data;

  useEffect(
    () => {
      navigation.setOptions({
        title: params!.data.name
      })
    }, []
  )
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
          <TopAppBar
            left={true}
            right={true}
          />
      </View>
      {/* ------------------------------------------------- */}
      <View
          style={{
          ...styles.middle_box,
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <View
          style={{
            // flex: 1,
            height: 'auto',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text
            style={{ 
              ...styles.title_1,
              fontSize: 20,
              textAlign: 'center'
            }}
          >
            {`proyecto`}
          </Text>
          <Text
            style={{ 
              ...styles.title_1,
              fontSize: 30,
              textAlign: 'center'
            }}
          >
            {`JAJETOPA`}
          </Text>
        </View>
        {/* ========================================================== */}
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
        {/* ========================================================== */}
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
      height: '10%',
      width: '100%'
    },
    middle_box: {
      height: '75%',
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