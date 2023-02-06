import React ,{useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'

import { colors } from '../constantes/themes/colors'

const GameScreen = ({selectedNumber}) =>{
    var añoActual=2023
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Naciste en el año 🎂🎉🥳</Text>
            <Text style={styles.label}>{añoActual-parseInt(selectedNumber)}</Text>
            <Text style={styles.label}>Gracias por utilizar la aplicacion!</Text>
        </View>
    )}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center'
    },
    label:{
        padding:20,
        fontSize:22,
        fontFamily:'Karma-Regular'
    }
    
})

export default GameScreen;