import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View, Text, ScrollView, Image, FlatList, Linking } from 'react-native';
import { get_current_status, is_currently_open } from '../functions/get_open_status';
import { filter_item_model, match_item_model } from '../interfaces/MainInterfaces';
import { GeneralStyles } from '../theme/GeneralTheme';


interface Props extends NativeStackScreenProps <any, any>{};

export const DetalleLocal = ( { navigation, route: {params} }:Props  ) => {
  const data: match_item_model = params!.data;
  useEffect(
    () => {
      navigation.setOptions({
        title: params!.data.name
      })
    }, []
  )

  const render_business = ({item}: {item: filter_item_model}):JSX.Element => {
    return (
      <View
        style= {{
          height: 40,
          width: '95%',
          justifyContent: 'center',
          // alignItems: 'center'
        }}
      >
        <Text
          style={{...GeneralStyles.text_normal, color: 'rgba(10,0,5,1)'}}
        >
          {`${item.name}`}
        </Text>
      </View>
    )
  }

  return (
    <View style={{...GeneralStyles.main_container, justifyContent: 'flex-end', alignItems: 'center' }}>
      <Text 
        style={{ 
          fontSize: 40 
        }}
      > 
        {`${data.name}`} 
      </Text>
      <View
        style={{ 
          height: '85%',
          width: '95%',
          marginBottom: 5,
          // padding: 10,
          justifyContent: 'center', 
          alignItems: 'center'
        }}
      >
        <View
          style={{ 
            height: '100%',
            width: '95%', 
            backgroundColor: 'rgba(0,0,0,0.1)',
            padding: 10,
            borderRadius: 5,
            marginBottom: 5, 
            justifyContent: 'center', 
            alignItems: 'center'
          }}
        >
          <Image
            style={{ height: 200, width: 300}}
            source={require('../../assets/dummy_data/dummy_coffeeshop.jpg')}
          />
          <Text
            style={{...GeneralStyles.text_normal, fontSize: 15}}
          >
            {`Direccion: ${data.location.adress}, ${data.location.city}`}
          </Text>
          <Text
            style={{...GeneralStyles.text_normal, fontSize: 15}}
          >
            {
              !(is_currently_open(data.opening_hours))
              ? 'Actualmente CERRADO'
              : `Horario de atencion hoy: ${get_current_status(data.opening_hours).hours}`
            }
          </Text>
          <Text
            style={{...GeneralStyles.text_subtitle}}
          >
            {`Categorias`}
          </Text>
          <FlatList
            data={ data.filters_data.filter( i => i.flag === true ) }
            keyExtractor={ item => item.id }
            renderItem={ render_business }
            ItemSeparatorComponent={ () => <View style={{height:'5%'}}/> }
            style={{ width: '90%'}}
            contentContainerStyle={{ 
              justifyContent: 'space-evenly', 
              alignItems: 'baseline', 
              height: '60%',
              backgroundColor: 'rgba(255, 255, 255,0.1)'
            }}
          />
          <Text
            style={{
              ...GeneralStyles.text_normal, color: 'blue'
            }}
            onPress={
              () => {
                Linking.openURL(
                  `https://www.google.com/maps/search/?api=1&query=${data.location.latitude},${data.location.longitude}`
                )
              }
            }
          >
            {`Abrir en Maps `}
          </Text>
        </View>
      </View>
    </View>
  );
};