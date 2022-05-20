import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';


import { AuthContext } from '../../context/AuthContext';
import { TopAppBar } from '../../components/top_app_bar';

// solucionar


import { DummyData, dummy_latitude, dummy_longitude } from '../../../raw_data/DummyData';
import { get_distance } from '../../functions/get_distance';
import { get_current_status, is_currently_open } from '../../functions/get_open_status';
import { filter_data_model, filter_ids, filter_item_model, match_item_model } from '../../interfaces/MainInterfaces';
import { GeneralStyles } from '../../theme/GeneralTheme';
import { COLORES_GLOBALES } from '../../theme/colores';



interface Props extends NativeStackScreenProps <any, any>{};

export const DetalleLocalScreen_ = ( { navigation, route: {params} }:Props ) => {
  const [DATA, setDATA] = useState<match_item_model>(params!.data);   //PELIGRO

  useEffect( () => {
    try{
      setDATA(params!.data)
    } catch(e){
      console.log(e);
    }
  },[])

  const render_business = ({item}: {item: filter_item_model}):JSX.Element => {
    return (
      <View
        style= {{
          height: 40,
          width: '95%',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{...GeneralStyles.text_normal, color: COLORES_GLOBALES.negro_1}}
        >
          {`${item.name}`}
        </Text>
      </View>
    )
  }

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
          alignItems: 'flex-start'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center', 
            maxWidth: '90%',
          }}
        >
          <MaterialCommunityIcons 
            name="chevron-left" 
            size={ 40 } 
            color={COLORES_GLOBALES.negro_1}
            onPress={ () => { navigation.goBack() } }
          />
          <View style={{ width: '5%' }} />
          <Text
            style={{
              ...styles.title_1,
              fontSize: 30,
            }}
          >
            {DATA.name}
          </Text>
        </View>
        {/* ========================================================== */}
        <View
        style={{ 
          height: '85%',
          width: '100%',
          marginBottom: 5,
          justifyContent: 'center', 
          alignItems: 'center'
        }}
      >
        <View
          style={{ 
            height: '100%',
            width: '95%',
            padding: 10,
            borderRadius: 5,
            marginBottom: 5, 
            justifyContent: 'center', 
            alignItems: 'center'
          }}
        >
          <Image
            style={{ height: 200, width: 300}}
            source={require('../../../assets/dummy_data/dummy_coffeeshop.jpg')}
          />
          <Text
            style={{
              ...GeneralStyles.text_normal, 
              color: COLORES_GLOBALES.negro_1, 
              fontSize: 15}}
          >
            {`Direccion: ${DATA.location.adress}, ${DATA.location.city}`}
          </Text>
          <Text
            style={{
              ...GeneralStyles.text_normal, 
              color: COLORES_GLOBALES.negro_1,
              fontSize: 15}}
          >
            {
              !(is_currently_open(DATA.opening_hours))
              ? 'Actualmente CERRADO'
              : `Horario de atencion hoy: ${get_current_status(DATA.opening_hours).hours}`
            }
          </Text>
          <Text
            style={{...GeneralStyles.text_subtitle, color: COLORES_GLOBALES.negro_1}}
          >
            {`Categorias`}
          </Text>
          <FlatList
            data={ DATA.filters_data.filter( i => i.flag === true ) }
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
                  `https://www.google.com/maps/search/?api=1&query=${DATA.location.latitude},${DATA.location.longitude}`
                )
              }
            }
          >
            {`Abrir en Maps `}
          </Text>
        </View>
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



// RECICLADO

interface myProps {
  navigation: any
}
 