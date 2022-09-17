import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Players from './BottomNavTabs/Clubs'
import Ionicons from '@expo/vector-icons/Ionicons';
import Clubs from './BottomNavTabs/Players'
import Favorites from './BottomNavTabs/Favorites'


const Tab = createBottomTabNavigator();
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
            <Tab.Screen name='Players' component={Players}
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

export default BottomTab;
