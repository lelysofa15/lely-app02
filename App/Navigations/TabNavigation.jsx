import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.blue
    }}>
        <Tab.Screen name='home' component={HomeScreen} 
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color, fontSize:12,marginTop:-7, fontFamily:'nunito'}}>Home</Text>
            ),
            tabBarIcon: ({color, size})=>(
                <FontAwesome name="home" size={size} color={color} />
            )
        }} />
        <Tab.Screen name='booking' component={BookingScreen} 
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color, fontSize:12,marginTop:-7, fontFamily:'nunito'}}>Booking</Text>
            ),
            tabBarIcon: ({color, size})=>(
                <FontAwesome name="bookmark" size={size} color={color} />
            )
        }}/>
        <Tab.Screen name='profile' component={ProfileScreen} 
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color, fontSize:12,marginTop:-7, fontFamily:'nunito'}}>Profile</Text>
            ),
            tabBarIcon: ({color, size})=>(
                <FontAwesome name="user-circle" size={size} color={color} />
            )
        }}/>
    </Tab.Navigator>
  )
}

// const styles = StyleSheet.create({
//     label: {
//         color: color,
//         fontSize: 12,
//         marginTop: 7,
//     }
// })