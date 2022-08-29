import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav";

const Stack = createStackNavigator();

export default function LoggedInNav() {
    return (
        <Stack.Navigator headerMode="none" mode="modal">
            <Stack.Screen name="TabsNav" componenet={TabsNav}/>
            <Stack.Screen name="UploadNav" componenet={UploadNav}/>
        </Stack.Navigator>
    )
} 