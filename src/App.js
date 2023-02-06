import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React ,{useState} from 'react';

import GameScreen from './screens/GameScreen';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import {useFonts} from "expo-font"

const App =()=> {
  const [loaded]=useFonts({
    'Karma-Regular':require('../assets/fonts/Karma-Regular.ttf')
    
  });
  const [userNumber,setUserNumber] = useState(null); //validar si el juego inicio
   //CREAR CAMBIO DE PANTALLA POR UN BOTTON
   const onHandleStartGame = (selectedNumber) =>{
      setUserNumber(selectedNumber);
   }
  //creo un componente teniendo encuenta si hay una variable distinta de null en usestate
  //NULL STARTGAME !NULL GAMESCREEN
  const Content = () =>(userNumber ? <GameScreen selectedNumber={userNumber}/> : <StartGameScreen onHandleStartGame={onHandleStartGame}/>);
  
  if(!loaded){
    return(
      <View style={styles.container}> 
          <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title={'Adivina que año Naciste'}/>
      <Content/>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
export default App;