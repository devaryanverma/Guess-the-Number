import React from 'react';
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';

const MainButton = props =>{
	return(
		<TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
		<View style={styles.Button}>
		<Text style={styles.TextButton} >{props.children}</Text>
		</View>
		</TouchableOpacity>
	);
};

const styles= StyleSheet.create({
	Button:
	{
		backgroundColor: Colors.primary,
		borderRadius: 20,
		height : 50,
		marginVertical : 10
	},
	TextButton:
	{
		padding :10,
	  fontSize :20
	}
});

export default MainButton;