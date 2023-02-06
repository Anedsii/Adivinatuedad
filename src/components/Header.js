import {StyleSheet, Text, View} from 'react-native'

import React from 'react'
import { colors } from '../constantes/themes/colors'

const Header = ({title}) =>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    
        )}

const styles = StyleSheet.create({
    header:{
        height:100,
        paddingTop:20,
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle:{
        color:'black',
        fontSize:22,
        fontFamily:'Karma-Regular'
    }
})

export default Header;