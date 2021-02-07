
import React, { Component, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, ActivityIndicator } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Loader } from "../Components/index"
import {Home} from "../Containers";
import { Ionicons, Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

// function AuthStack() {
//     return <Stack.Navigator initialRouteName='LogIn'>
//         <Stack.Screen
//             name="SignIn"
//             component={SignIn}
//             options={{
//                 headerTitle: 'Sign In',
//                 headerBackTitleStyle: { color: 'white', fontSize: 50 },
//                 headerTitleAlign: 'center',
//                 headerStyle: { backgroundColor: 'black', borderWidth: 1 },
//                 headerTitleStyle: { color: 'white', fontSize: 25 },
//                 headerTintColor: 'white',
//                 headerShown:false
//             }} />

//              <Stack.Screen
//             name="SignUp"
//             component={SignUp}
//             options={{
//                 headerTitle: 'Sign Up',
//                 headerShown:false,
//                 headerBackTitleStyle: { color: 'white', fontSize: 50 },
//                 headerTitleAlign: 'center',
//                 headerStyle: { backgroundColor: 'black', borderWidth: 1 },
//                 headerTitleStyle: { color: 'white', fontSize: 25 },
//                 headerTintColor: 'white'
//             }} />

//         <Stack.Screen
//             name="LogIn"
//             component={SignIn}
//             options={{
//                 headerTitle: 'Login',
//                 headerTitleAlign: 'center',
//                 headerStyle: { backgroundColor: 'black', borderWidth: 1 },
//                 headerTitleStyle: { color: 'white', fontSize: 25 },
//                 headerTintColor: 'white',
//                 headerShown:false
//             }} />
//     </Stack.Navigator>
// }

function AppStack() {
    return <Tab.Navigator>
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="md-home" size={size} color='black' />
                ),
              }}
        />
         <Tab.Screen
            name="series"
            component={Home}
            options={{
                tabBarLabel: 'Series',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="trophy" size={24} color="black" />
                ),
              }}
        /> 
           <Tab.Screen
            name="fantasy"
            component={Home}
            options={{
                tabBarLabel: 'Fantasy',
                tabBarIcon: ({ color, size }) => (
                <AntDesign name="earth" size={24} color="black" />
                ),
              }}
        /> 
          <Tab.Screen
            name="news"
            component={Home}
            options={{
                tabBarLabel: 'News',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="news" size={size} color="black" />
                ),
              }}
        /> 
             <Tab.Screen
            name="more"
            component={Home}
            options={{
                tabBarLabel: 'More',
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="appstore-o" size={size} color="black" />
                ),
              }}
        /> 
    </Tab.Navigator>
}

const Router = () => {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer >
    )
}

export default Router