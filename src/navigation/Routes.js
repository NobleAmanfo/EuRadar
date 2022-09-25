import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Favorites from '../screens/Favorites';
import ClubPlayers from '../screens/ClubPlayers';
import Clubs from '../screens/Clubs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import PlayerDetails from '../screens/PlayerDetails';



const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function PlayerStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false,headerMode: 'screen',}}>
        <Stack.Screen name="ClubPlayers" component={ClubPlayers} />
        <Stack.Screen name="PlayerDetails" component={PlayerDetails} />
      </Stack.Navigator>
    );
  } 
const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName={Clubs}
            screenOptions={{
                tabBarInactiveTintColor: 'grey',
                tabBarActiveTintColor: '#94a274',
                tabBarStyle: {
                    backgroundColor: '#00001c',
                    position: 'absolute',
                },
            }}

        >
            <Tab.Screen name='Clubs' component={Clubs}
                options={{
                    headerShown:false,
                    tabBarLabel: 'Clubs',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='football' size={26} color={color} />
                    ),
                }}
            />
            <Tab.Screen name='Players' component={PlayerStack}
                options={{
                    headerShown:false,
                    tabBarLabel: 'Players',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='person' size={26} color={color} />
                    ),
                }}
            />
            <Tab.Screen name='Favorites' component={Favorites}
                options={{
                    headerShown:false,
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='star' size={26} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}


export default function Routes() {

    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Login" component={Login}/>
        <Stack.Screen options={{headerShown:false}} name="Home" component={BottomTab}/>
      </Stack.Navigator>
    </NavigationContainer>
      
    )
  }
