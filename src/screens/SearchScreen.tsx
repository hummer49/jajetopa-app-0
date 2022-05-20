//=================================================================
// libraries
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// styles
import { GeneralStyles } from '../theme/GeneralTheme';

// interfaces
import { Filter, FilterOption } from '../components/interfaces/Filter';
import { Data } from '../components/interfaces/Data';

// static data
import { DATAFilterOptions } from '../../raw_data/FilterOptions';
import { DummyData } from '../../raw_data/DummyData';

//=================================================================



export const SearchScreen = () => {

    // const [state, dispatch] = useReducer(reducer, initialState, init)
    const [FilterOptions, setFilterOptions] = useState<Array<FilterOption>>(DATAFilterOptions)

    const [Data, setData] = useState<Array<Data>>([])

    const renderFilterOptions = ({item}: {item: FilterOption}):JSX.Element => {
        return(
            <TouchableOpacity 
                style = { GeneralStyles.container_item }
                onPress={
                    ()=> { UpdateFilterFlag(item.id) } 
                }
            >    
                <Text style={
                    GeneralStyles.text_normal
                }>
                    {item.key}
                </Text>
            </TouchableOpacity>
        );
    };
    const UpdateFilterFlag = (id:string):void =>{
        FilterOptions.forEach(
            (item)=>{
                if(item.id === id){
                    item.flag = !item.flag
                }
            }
        )
        setFilterOptions( FilterOptions )
    }
    const SearchMatches = ():void =>{
        let aux:Array<Data> = DummyData;
        for(let i in FilterOptions){
            // console.log(`FILTER :: ${FilterOptions[i].key}`)
        }
    }
    const FilterToString = ():string => {
        let aux:string = ''
        FilterOptions.forEach(
            (item) => {
                if(item.flag === true){
                    aux = `${aux} - ${item.key} `
                }
            }
        )
        return aux
    }

    return (
        <View style={GeneralStyles.main_container}>
            {/* ============================================================ */}
            <View style={{...GeneralStyles.container_2, top:40, height:'45%', width:'95%'}}>
                <Text style={GeneralStyles.text_title}>
                    BusCOFFEE
                </Text>
                <Text style={GeneralStyles.text_normal}>
                    Seleccione los campos de su interes:
                </Text>
                <View style={GeneralStyles.container_transparent}>
                    <FlatList
                        data={FilterOptions}
                        extraData={FilterOptions}
                        keyExtractor={ item => item.id }
                        renderItem={ renderFilterOptions }
                        ItemSeparatorComponent={ () => <View style={{height:10}}/> }
                    />
                </View>
                <TouchableOpacity 
                    style={{...GeneralStyles.container_1,width:'80%', height: 40}}
                    onPress={
                        ()=> SearchMatches()
                    }
                >
                    <Text style={{...GeneralStyles.text_normal, color:'#001000'}}> BUSCAR </Text>
                </TouchableOpacity>
                
            </View>
            {/* ============================================================ */}
            <View style={{...GeneralStyles.container_1, width: '90%', top:50}}>
                <Text>
                        { `${FilterToString()}` }
                </Text>
                <ScrollView style={GeneralStyles.container_scrollable}>
                    <Text>Hello</Text>
                </ScrollView>
            </View>
        </View>
    )
}
