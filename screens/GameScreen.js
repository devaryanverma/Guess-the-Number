import React, {useState, useRef} from 'react';
import {Button, ScrollView, Text, View, StyleSheet, Alert, Dimensions} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';

const guessNumber=(min, max, excluded)=>
{
	min = Math.ceil(min);
	max= Math.floor(max);
	const rndnumb = Math.floor(Math.random()*(max-min))+min;
	if (rndnumb === excluded)
	{
		return guessNumber(min,max, excluded);
	}
	else {
		return rndnumb;
	}
};

const GameScreen = props =>
{

	const [compGuess, setCompGuess]=useState(guessNumber(1, 100, props.userChoice));
	const [value,setValue]=useState([]);
	const [rounds, setRounds]=useState(0);
	const [heightChange,setHeightChange]=useState(Dimensions.get('window').height);
	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	const updateHeight=()=>{
	
		setHeightChange(Dimensions.get('window').height);
		
	};
	
	Dimensions.addEventListener('change',updateHeight);
	if (compGuess===props.userChoice)
	{
		props.onGameHandler(rounds);
	}
	const nextGuess= direction =>{
		if((direction=== 'lower' && compGuess < props.userChoice) || (direction=== 'greater' && compGuess > props.userChoice))
		{
			Alert.alert('Don\'t lie','Select the Correct number',[{text : 'Sorry', style: 'cancle'}])
			return;
		}
		if (direction==='lower')
		{	
			currentHigh.current= compGuess;
		}
		else 
		{
			currentLow.current= compGuess +1;
		}
		const newGuess= guessNumber(currentLow.current,currentHigh.current,compGuess);
		setCompGuess(newGuess);
		setRounds(rounds=>rounds+1);
			setValue(currentvalue=>[compGuess,...currentvalue]);
	};
	if (heightChange<600)
	{
		return(
		<View style={styles.Screen}>
		<Text> Your Opponent's Guess </Text>
		
		<View style={styles.Look}>
			<MainButton onPress= {nextGuess.bind( this , 'lower')}> 
				< Ionicons name="md-remove" size={24} color ="white" />
			</MainButton>
			<NumberContainer>{compGuess}</NumberContainer>
			<MainButton onPress= {nextGuess.bind( this , 'greater')}>
				< Ionicons name="md-add" size={24} color ="white" />
			</MainButton>
		</View>
		
		<ScrollView contentContainerStyle={styles.containor}>
		{ 
		value.map((value,index)=>
		
		<View key={value} style={styles.ItemList}>
		<Text style={styles.item}>#{rounds-index}</Text>
		<Text style={styles.item}>          {value}</Text>
		</View>
		)}
		</ScrollView>
		
	</View>
);
	}
	return(
	<View style={styles.Screen}>
		<Text> Your Opponent's Guess </Text>
		<NumberContainer>{compGuess}</NumberContainer>
		<Card style={styles.buttonContainor}>
			<MainButton onPress= {nextGuess.bind( this , 'lower')}> 
				< Ionicons name="md-remove" size={24} color ="white" />
			</MainButton>
			<MainButton onPress= {nextGuess.bind( this , 'greater')}>
				< Ionicons name="md-add" size={24} color ="white" />
			</MainButton>
		</Card>
		
		<ScrollView contentContainerStyle={styles.containor}>
		{ 
		value.map((value,index)=>
		
		<View key={value} style={styles.ItemList}>
		<Text style={styles.item}>#{rounds-index}</Text>
		<Text style={styles.item}>          {value}</Text>
		</View>
		)}
		</ScrollView>
		
	</View>
	
	);

};

const styles= StyleSheet.create({
Screen:{
	flex :1,
	marginVertical: 10,
	alignItems: 'center'
},
Look:{
	flexDirection:'row',
	justifyContent:'space-around',
	alignItems:'center',
	width:'60%'
},
buttonContainor:{
	flexDirection :'row',
	width : '80%',
	justifyContent:'space-around'
},
item:{
		
		flex :1,
		fontSize: 20
},
containor:{
		flexGrow:1,
		justifyContent:'flex-end',
		alignItems:'center',
		width:'60%'
},
ItemList:
{    
		width :'80%',
		
		
		
		flexDirection:'row',
		marginVertical: 10,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
		elevation: 8,
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10
}
});

export default GameScreen;