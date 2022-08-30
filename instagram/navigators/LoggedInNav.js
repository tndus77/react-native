import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav";
import UploadForm from "../screen/UploadForm";
import MessagesNav from "./MessagesNav";

const Stack = createStackNavigator();

export default function LoggedInNav() {
    return (
        <Stack.Navigator mode="modal">
            <Stack.Screen name="TabsNav" componenet={TabsNav}/>
            <Stack.Screen name="UploadNav" componenet={UploadNav}/>
            <Stack.Screen name="UploadForm" options={{
                headerBackTitleVisible: false,
                title: "Upload",
                headerTintColor: "white",
                headerStyle: {
                    backgroundColor: "black",
                },
            }} componenet={UploadForm}/>
            <Stack.Screen name="Messages" component={MessagesNav}/>
        </Stack.Navigator>
    )
} 