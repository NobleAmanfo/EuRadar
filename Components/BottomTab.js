import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Players from './BottomNavTabs/Players'
import Clubs from './BottomNavTabs/Clubs'
import Favorites from './BottomNavTabs/Favorites'


const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName={Players}
            screenOptions={{
                tabBarInactiveTintColor: 'grey',
                tabBarActiveTintColor: '#94a274',
                tabBarStyle: {
                    backgroundColor: '#00001c',
                    position: 'absolute',
                },
            }}

        >
            <Tab.Screen name='Players' component={Players}
                options={{
                    headerShown:false,
                    tabBarLabel: 'Players',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name='Clubs' component={Clubs}
                options={{
                    headerShown:false,
                    tabBarLabel: 'Clubs',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="soccer" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name='Favorites' component={Favorites}
                options={{
                    headerShown:false,
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="star" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab;
