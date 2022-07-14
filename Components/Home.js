import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from "react-native";
import {NavigationContainer} from "react-navigation/native";
import BottomTab from './BottomTab';
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';





const Home = () => {
    return (
            <BottomTab/> 
    )
}

export default Home;

const styles = StyleSheet.create({

})
