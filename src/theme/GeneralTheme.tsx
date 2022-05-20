import { StyleSheet } from 'react-native';


export const GeneralStyles = StyleSheet.create({
    main_container:{
        backgroundColor: 'rgba(41,29,69,0.4)',
        flex: 1
    },
    container_1:{
        backgroundColor: 'rgba(200,210,210,0.6)',
        alignItems: 'center',
        borderRadius:5,
        justifyContent:'center'
    },
    container_2:{
        backgroundColor: 'rgba(72,68,85,0.5)',
        alignItems: 'center',
        borderRadius:15,
        justifyContent:'center'
    },
    container_transparent:{
        backgroundColor: 'rgba(42,120,79,0.5)',
        height: '30%',
        width: '100%',
        alignItems: 'center',
        justifyContent:'space-around',
    },
    container_item:{
        backgroundColor: 'rgba(72,68,85,0.5)',
        alignItems: 'center',
        borderRadius: 15,
        height: 40,
        width: 320
    },
    container_scrollable:{
        width: 50,
        height: 70
    },
    text_title:{
        color:'rgba(227,227,236,1)',
        fontFamily: 'monospace',
        fontSize:50,
        letterSpacing: 10
    },
    text_subtitle:{
        color:'rgba(227,227,236,1)',
        fontFamily: 'monospace',
        fontSize:30,
        letterSpacing: 5
    },
    text_normal:{
        color: 'rgba(231,231,242,1)',
        fontFamily: 'monospace',
        fontSize: 20
    },
    text_striked:{
        color: 'rgba(231,231,242,1)',
        fontFamily: 'monospace',
        fontSize: 20,
        textDecorationLine: 'line-through'
    }
})