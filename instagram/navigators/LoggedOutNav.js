import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screen/Welcome";
import CreateAccount from "../screen/CreateAccount";
import Login from "../screen/Login"

const Stack = createStackNavigator();

export function LoggedOutNav() {
    return(
        <Stack.Navigator 
         screenOptions={{ 
            headerBackTitleVisible: false,
            headerTitle: false,
            headerTransparent: true,
            headerTintColor: 'white'
         }}>
            <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="CreateAccount" component={CreateAccount}/>
        </Stack.Navigator>
    )
}