import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Components/Login';
import Home from './Components/Home';
import PlayerList from './Components/PlayerList';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
        <Stack.Screen options={{headerTransparent: true}} name="PlayerList" component={PlayerList} />          
      </Stack.Navigator>
    </NavigationContainer>
      
    )
  }


const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#fafafa',
    alignItems: 'center',
    flex: 1,
    borderRadius: 20
  },
  input: {
    marginTop: 20,
    paddingVertical: 12,
    width: 300,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: 380,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#94a274',
    marginTop: 50
  },

  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: 380,
    borderRadius: 10,
    elevation: 15,
    backgroundColor: 'white',
    marginTop: 8,
    // borderColor: 'black',
    // borderWidth: 1,
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: 380,
    borderRadius: 10,
    elevation: 15,
    backgroundColor: 'white',
    marginTop: 20,
    // borderColor: 'black',
    borderWidth: 1,
  },
  button3: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    width: 380,
    borderRadius: 10,
    elevation: 15,
    backgroundColor: 'white',
    marginTop: 20,
    // borderColor: 'black',
    borderWidth: 1,
  },

  tinyLogo: {
    height: 18,
    width: 18,
    marginRight: 5
  }


})
