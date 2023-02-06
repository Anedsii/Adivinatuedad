import {StyleSheet, View} from "react-native"

import React from 'react'

const Card = ({children,style}) =>{
    return(
        //señalo en utilizar los estilos de tantos de esta clase como los de la variable
        <View style={{...styles.container, ...style}}>{children}</View>
    )}

export default Card;

const styles = StyleSheet.create({
    
    container:{
        backgroundColor:"#fff",
        shadowColor: "#000",
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 3,
        shadowOffset:{
            width:1,
            height:1
        }
    }
})