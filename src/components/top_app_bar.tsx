import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORES_GLOBALES } from '../theme/colores';





interface top_app_bar_props {
  left: boolean;
  right: boolean;
}

export const TopAppBar = ( { left, right }:top_app_bar_props ):JSX.Element => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: COLORES_GLOBALES.lila_1,
        flexDirection: 'row'
      }}
    >
      {/* left */}
      <View
        style={{
          ...styles.box,
          alignItems: 'flex-start'
        }}
      >
        {
          left === true
          ? <MaterialCommunityIcons 
              name='menu'
              size={24} 
              color={COLORES_GLOBALES.blanco_1}
            />
          : null
        }
      </View>
      {/* center */}
      <View
        style={{
          ...styles.box,
          alignItems: 'center'
        }}
      >

      </View>
      {/* right */}
      <View
        style={{
          ...styles.box,
          alignItems: 'flex-end'
        }}
      >
        {
          right === true
          ? <MaterialCommunityIcons 
              name='account'
              size={24} 
              color={COLORES_GLOBALES.blanco_1}
            />
          : null
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  box:{
    height: '100%',
    width: '30%',
    justifyContent: 'flex-end',
    paddingBottom: 15
  }
})