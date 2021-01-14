import React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';
import Card from '../components/Card';

const GameOverScreen =props =>{
return(
<ScrollView>
	<View >
		<View style={styles.heading} >
		<Text style={styles.fontSize}> Game Over </Text>
		</View>
		<Card style={styles.screen}>
			<View style = {styles.imageContainor}>
				<Image source={{uri : "https://i.ytimg.com/vi/7fdV-NqEaoY/maxresdefault.jpg"}}
				style={styles.image}/>
			</View>
			<Text> Number of Guesses : {props.totalGuess} </Text>
			<Text> Your Number was : {props.yourNumb} </Text>
			<View style={styles.button}>
				<Button title = "New Game" onPress={props.newGame} />
			</View>
		</Card>
	</View>
</ScrollView>
);
};

const styles = StyleSheet.create(
{
	screen:
	{
	alignItems: 'center',
	justifyContent: 'center',
	fontSize : 30,
	marginVertical: 30,
	marginLeft: 20,
	marginRight: 20
	},
	imageContainor:{
		width : 300,
		height : 300,
		borderWidth :3,
		borderRadius: 150,
		overflow: 'hidden',
		marginVertical: 30
	},
	image:{
		width: '100%',
		height: '100%'
	},
	button:{
		width : 100,
		alignItems:'center',
		paddingTop :10
	},
	fontSize:{
		paddingTop:10
	},
	heading:{
		alignItems:'center'
		}
});

export default GameOverScreen;