
import React, { Component, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, ActivityIndicator } from "react-native"
import { Loader } from "../Components/index"
import {Home} from "../Containers"



const Stack = createStackNavigator()

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
    return <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown:false
            }}
        />

    </Stack.Navigator>
}

const Router = () => {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer >
    )
}

export default Router