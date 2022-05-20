import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';


import { DummyData, dummy_latitude, dummy_longitude } from '../../raw_data/DummyData';
import { get_distance } from '../functions/get_distance';
import { is_currently_open } from '../functions/get_open_status';
import { filter_data_model, filter_ids, filter_item_model, match_item_model, match_data_model } from '../interfaces/MainInterfaces';
import { GeneralStyles } from '../theme/GeneralTheme';

interface Props extends NativeStackScreenProps <any, any>{};
 
export const HomeScreen = ( { navigation }:Props ) => {
	const [FILTERS, setFILTERS] = useState<filter_data_model>({
    data: InitialFILTERS,
    aux_text: '',
    search_term: null
  });

  const [MATCHES, setMATCHES] = useState<match_data_model> ({
    data:[],
    count: 0
  })

	const render_FilterOptions = ({item}: {item: filter_item_model}):JSX.Element => {
		return(
			<View
        style={{ 
          flexDirection: 'row', 
          justifyContent: 'flex-start',
          alignItems: 'center', 
          width: '90%', 
          height: 30
        }}
      >
        <Checkbox 
          status={ item.flag===true ? 'checked' : 'unchecked' }
          uncheckedColor={'rgba(99,0,255,0.3)'}
          color={'rgba(99,0,255,1)'}
          onPress={ () => {
            FILTERS.data.find(
              i => {
                if(i.id === item.id){
                  i.flag = !i.flag;
                }
              }
            );
            let aux: string = '';
            FILTERS.data.forEach(
              (i) => {
                if(i.flag){
                  if(aux !== ''){
                    aux = aux + '|' + i.id;
                  }else{
                    aux = aux + i.id;
                  }
                }
              }
            );
            // console.log(aux);
            setFILTERS({...FILTERS, search_term: aux})
          }}
        />
        <Text
          style={{ 
            ...GeneralStyles.text_normal,
            textDecorationLine: item.flag ? 'line-through' : null
           }}
        >
          {`${item.name}`}
        </Text>
      </View>
		);
	};
  const render_Matches = ({item}: {item: match_item_model}):JSX.Element => {
    const flag_open: boolean = is_currently_open(item.opening_hours)
		return(
			<View
        style={{ 
          flexDirection: 'row', 
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          width: '100%', 
          height: 70 
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: flag_open ? 'rgba(32,44,128, 0.5)' : 'rgba(82,44,128, 0.5)',
            borderRadius: 15,
            width: '95%', 
            height: '90%',
            paddingLeft: 20,
            justifyContent: 'center'
          }}
          onPress={
            () => {
              navigation.navigate('DetalleLocal', { data: item})
            }
          }
        >
        <Text
          style={{ 
            ...GeneralStyles.text_normal,
           }}
        >
          {`${item.name}`}
        </Text>
        <View 
          style ={{ 
            flexDirection: 'row', 
            width: '90%', 
            height: '50%', 
            justifyContent: flag_open ? 'flex-start' : 'space-between',
            alignItems: 'center'
          }}
        >
          <Text>
            {`Distancia ${get_distance(dummy_latitude, item.location.latitude, dummy_longitude, item.location.longitude)} km (aprox)`}
          </Text>
          {
            !flag_open
            ? <Text> {`Local cerrado`} </Text>
            : null
          }
        </View>
        </TouchableOpacity>
      </View>
		);
	};
  return (
    <View 
      style={{ 
        ...GeneralStyles.main_container, 
        justifyContent: 'flex-end', 
        alignItems: 'center', paddingBottom: 30,
        // alignItems: 'center',
        height: '100%',
        marginTop: 30
      }}
     >
			<Text style={{ ...GeneralStyles.text_title}}>
				{`Proyecto JAJETOPA`}
			</Text>
			<View 
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '33%', 
          width: '90%',
          }}
        >
				<FlatList
					data={FILTERS.data}
					keyExtractor={ item => item.id }
					renderItem={ render_FilterOptions }
					ItemSeparatorComponent={ () => <View style={{height:'5%'}}/> }
					style={{ width: '90%'}}
					contentContainerStyle={{ 
            justifyContent: 'center', 
            alignItems: 'baseline', 
            height: '100%' }}
				/>
        
        {/* { 
          FILTERS.search_term && FILTERS.search_term.length > 0     ?
            <Text> {`Buscar: ${FILTERS.search_term}`} </Text>  :
            null
        } */}
			</View>
      <View
        style={{
          height: '50%',
          width:'95%',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          style= {{
            backgroundColor: 'rgba(32,44,78, 0.33)',
            height: 80,
            width: 200,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={ () => {
            if(FILTERS.search_term){
              const aux = perform_search(DummyData, FILTERS.search_term)
              setMATCHES({...MATCHES, data: aux, count: aux.length})
            } else{
              setMATCHES({ data: [], count: 0 })
            }
          }}
        >
          <Text>{`BUSCAR`}</Text>
        </TouchableOpacity>
        {
          MATCHES.count! > 0
          ? <Text> { `Se encontraron ${MATCHES.count} locales` } </Text>
          : null
        }
        {
          MATCHES.data.length > 0
          ? 
            <FlatList
            data={MATCHES.data}
            keyExtractor={ item => item.id }
            renderItem={ render_Matches }
            ItemSeparatorComponent={ () => <View style={{height:5}}/> }
            style={{ 
                width: '90%',
                // paddingVertical: 5
            }}
            contentContainerStyle={{ 
                justifyContent: 'flex-start', 
                alignItems: 'center',
            }}
            />
          : null
        }
      </View>
      {
        MATCHES.count
        ? 
          <Text
            style={{ fontSize:15, color: 'blue'}}
            onPress={
              () => { navigation.navigate('Mapa', {data: MATCHES.data}) }
            }
          >
            {`Ver en el mapa`}
          </Text>
        : null
      }
    </View>
  );
};

// ====================================================================

const InitialFILTERS: filter_item_model[] = [
  {
      id: filter_ids.CAT_1,
      name: 'Cafe de Especialidad',
      flag: false
  },
  {
      id: filter_ids.CAT_2,
      name: 'Desayuno',
      flag: false
  },
  {
      id: filter_ids.CAT_3,
      name: 'Merienda',
      flag: false
  },
  {
      id: filter_ids.CAT_4,
      name: 'Metodos Filtrados',
      flag: false
  },
  {
      id: filter_ids.CAT_5,
      name: 'Cafe frio',
      flag: false
  }
];

const perform_search = (DATA: match_item_model[], search_term: string):match_item_model[] => {
  let aux: match_item_model[] = DATA
  const terms: string[] = search_term.split('|');
  terms.forEach(
    term =>  aux = aux.filter(
      data => data.filter_match.split('|').indexOf(term) !== -1)
  )
  return aux;
}