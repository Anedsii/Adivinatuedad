import {Alert, Button, Keyboard, StyleSheet, Text, TextInput, TouchableNativeFeedback, View} from 'react-native'
import React ,{useState} from 'react'

import Card from '../components/Card'
import NumberContainer from '../components/NumberConteiner'
import { colors } from '../constantes/themes/colors'

/// onHabler star game para comunicar con el cambio de pantalla al apretar confirmar
const StartGameScreen = ({onHandleStartGame}) =>{
    const [enterValue,setEnterValue]=useState("");
    const [confirmed, setConfirmed]=useState(false);
    const [selectedNumber,setSelectedNumber]=useState(null)
    
    const onHandlerChange = (text) =>{
        //escriba letras se utiliza replace solo numeros
        setEnterValue(text.replace(/[^0-9]/g,""));
    }

    const onHandleReset = () =>{
        setEnterValue("");
        setConfirmed(false);
    }
    const onHandlerConfirm = () =>{
        const chosenNumber= parseInt(enterValue,10);
        if(isNaN(chosenNumber) || chosenNumber <= 0|| chosenNumber>99){
            //ventana de alerta normal de android
            Alert.alert('Numero invalido', 'Debe ser menor a lo pedido 1 a 98',[{text:'Entendido',style:'destructive',onPress:onHandleReset}]);
        }else{
            setConfirmed(true);
            setSelectedNumber(chosenNumber);
            setEnterValue("");

        }
    }
    const onHandlerStartGame = () =>{
        onHandleStartGame(selectedNumber);
      
    }
//creo mi componente confirmer en base a mi componente Card
//solo cuando se confirma button aparece debajo del primer contenedpr
    const Confirmed = () => confirmed ? (
        <Card style={styles.confirmedContainer}>
            <Text style={styles.confirmedTitle}>Edad Colocada</Text>
            <NumberContainer number={selectedNumber}/>
            <Button 
            title='Click saber tu año'
            onPress={onHandlerStartGame}
            color= {colors.primary}
            />
        </Card>
    ) : null;
    return(
        <TouchableNativeFeedback onPress={()=>{Keyboard.dismiss()}}>
        <View style={styles.screen}>
            <Text style={styles.title}>Iniciando Juego!</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.label}>Escribe tu edad:</Text>
                <TextInput
                value={enterValue}
                keyboardType='numeric' 
                style={styles.input}
                onChangeText={onHandlerChange} 
                placeholder='0'/>
            
            <View style={styles.buttonContainer}>
                <Button title='Reiniciar' onPress={onHandleReset} color= {colors.primary} />
                <Button title='Confirmar' onPress={onHandlerConfirm} color= {colors.primary}/>

            </View>
            </Card>
            <Confirmed/>
            
        </View>
        </TouchableNativeFeedback>
    )}

    const styles = StyleSheet.create({
        screen:{
            flex:1,
            padding:10,
            alignItems:'center'
        },
        inputContainer:{
            justifyContent:'center',
            alignItems:'center',
            marginHorizontal:20,
            width:300,
            maxWidth:'80%',
            padding:20,
            borderRadius:10,
            
        },
        //para el card debo definit input container 
        input:{
            width:'10%',
            borderBottomWidth:1,
            minWidth:70,
            fontSize:22,
            paddingVertical:10,
            textAlign:'center',
            color:'gray'
            
        },
        buttonContainer:{
            flexDirection:"row",
            width:'100%',
            justifyContent:'space-around',
            marginTop:20
        },
        label:{
            fontSize:19,
            color:'gray',
            paddingVertical:20,
        },
        title:{
            fontSize:22,
            textAlign:'center',
            paddingVertical:20
        },
        confirmedContainer:{
            width:"70%",
            height:200,
            justifyContent:'space-around',
            alignItems:'center',
            marginVertical:30,
            borderRadius:11
            
        },
        confirmedTitle:{
            fontSize:16
        }
        
    })

    export default StartGameScreen;