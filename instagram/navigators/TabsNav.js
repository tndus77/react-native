import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View} from 'react-native'
import TabIcon from "../componenets/nav/TabIcon";
import SharedStackNav from "./SharedStackNav";

const Tabs = createBottomTabNavigator()

export default function TabsNav() {
    return <Tabs.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false }} sceneContainerStyle={{ borderTopColor: "gray", backgroundColor: "black"}}>
        <Tabs.Screen name="Feed" options={{ tabBarIcon: ({focused, color, size}) => <TabIcon iconName={"home"} color={color} focused={focused} />}}>{() => <SharedStackNav screenName={"Feed"}/>}</Tabs.Screen> 
        <Tabs.Screen name="Search" options={{ tabBarIcon: ({focused, color, size}) => <TabIcon iconName={"search"} color={color} focused={focused} />}} >{() => <SharedStackNav screenName={"Search"}/>}</Tabs.Screen> 
        <Tabs.Screen name="Camera" component={View} listeners={({ navigation }) => { 
            return { 
                tabPress: (e) => {
                    e.preventDefault();
                    navigation.navigate('UploadNav')
                }
            }}} options={{ tabBarIcon: ({focused, color, size}) => <TabIcon iconName={"camera"} color={color} focused={focused} />}} />
        <Tabs.Screen name="Notification" options={{ tabBarIcon: ({focused, color, size}) => <TabIcon iconName={"heart"} color={color} focused={focused} />}} >{() => <SharedStackNav screenName={"Notification"}/>}</Tabs.Screen> 
        <Tabs.Screen name="Me" options={{ tabBarIcon: ({focused, color, size}) => <TabIcon iconName={"person"} color={color} focused={focused} />}}>{() => <SharedStackNav screenName={"Me"}/>}</Tabs.Screen> 
    </Tabs.Navigator>
} 