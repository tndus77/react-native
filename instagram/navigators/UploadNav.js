import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import SelectPhoto from "../screen/SelectPhoto";
import TakePhoto from "../screen/TakePhoto";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function UploadNav({navigation}) {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Select">
                {() => (
                    <Stack.Navigator ScreenOptions={{
                        headerTintColor: "black",
                        headerBackTitleVisible: false,
                    }} 
                    >
                    <Stack.Screen name="Select" options={{ title: "Choose a photo", headerBackTitleVisible: false, headerLeft: ({ tintColor }) => (
                        <TouchableOpacity onPress={() => {navigation.goBack()}}>
                            < Ionicons color={tintColor} name="close" size={28} />
                        </TouchableOpacity>),
                        }} component={SelectPhoto}/>
                </Stack.Navigator>
            )}</Tab.Screen>
            <Tab.Screen name="Take" component={TakePhoto}/>
        </Tab.Navigator>
        
    )
}