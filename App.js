import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';


import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {
    
    const [userNumber, setUserNumber]= useState();
    const [rounds, setRounds]= useState(0);

    const NewGameHandler= ()=>{
        setRounds(0);
        setUserNumber(null);
    };
    
    const startGameHandler = selectedNumber =>{
        setUserNumber(selectedNumber);
    };
    
    const roundsHandler = finalRound =>{
        setRounds(finalRound);
    };

    let content = <StartGameScreen onStartGame={startGameHandler} />;
    if (userNumber && rounds<=0)
    {
        content=<GameScreen userChoice={userNumber} onGameHandler={roundsHandler} />;
    }
    if(rounds> 0){
        content=<GameOverScreen totalGuess={rounds} yourNumb ={userNumber} newGame={NewGameHandler} />;
    }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});


