import { StyleSheet, Text, View } from 'react-native'

import React from "react";
import { colors } from '../constantes/themes/colors'

const NumberContainer = ({number}) =>{
    return(
    <View style={styles.container}>
        <Text style={styles.number}>{number}</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.primary,
        borderRadius:10
        
    },
    number:{
        fontSize:20,
        fontWeight:"bold"
    }
})


export default NumberContainer;