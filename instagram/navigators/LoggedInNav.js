import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View} from 'react-native'
import Feed from "../screen/Feed";
import Search from "../screen/Search";
import Notification from "../screen/Notification";
import Me from "../screen/Me";
import { Ionicons } from "@expo/vector-icons";
import TabIcon from "../componenets/nav/TabIcon";

const Tabs = createBottomTabNavigator()

export default function LoggedInNav() {
    return <Tabs.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false }} sceneContainerStyle={{ borderTopColor: "gray", backgroundColor: "black"}}>
        <Tabs.Screen name="Feed" options={{ tabBarIcon: ({focused, color, size}) => <TabIcon iconName={"home"} color={color} focused={focused} />}} component={Feed}/>
        <Tabs.Screen name="Search" options={{ tabBarIcon: ({focused, color, size}) => <TabIcon iconName={"search"} color={color} focused={focused} />}} component={Search}/>
        <Tabs.Screen name="Camera" options={{ tabBarIcon: ({focused, color, size}) => <TabIcon iconName={"camera"} color={color} focused={focused} />}} component={View}/>
        <Tabs.Screen name="Notification" options={{ tabBarIcon: ({focused, color, size}) => <TabIcon iconName={"heart"} color={color} focused={focused} />}} component={Notification}/>
        <Tabs.Screen name="Me" options={{ tabBarIcon: ({focused, color, size}) => <TabIcon iconName={"person"} color={color} focused={focused} />}} component={Me}/>
    </Tabs.Navigator>
} 