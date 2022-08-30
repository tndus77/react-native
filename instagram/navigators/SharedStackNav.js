import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack"
import Profile from '../screen/Profile'
import Photo from '../screen/Photo'
import Search from "../screen/Search";
import Feed from "../screen/Feed";
import Notification from "../screen/Notification";
import Me from "../screen/Me";
import UploadNav from "./UploadNav";
import UploadForm from "../screen/UploadForm";
import MessagesNav from "./MessagesNav";

const Stack = createStackNavigator();

export default function StackNavFactory({screenName}) {
    return <Stack.Navigator
     screenOptions={{
      headerTintColor: "white",
      headerBackTitleVisible: false,
      headerStyle: {
         shadowColor: "rgba(255, 255, 255, 0.3)",
         backgroundColor: "black",
      },
      headerMode: "screen"
     }}
     >
         {screenName === "Feed" ? (
            <Stack.Screen 
             name={"Feed"} 
             options={{
               headerTitle: () => <Image style={{maxHeight: 120, maxWidth: 120, tintColor: "white" }} resizeMode="contain" source={require("../assets/logo.png")}/>
             }}
             component={Feed} />
            ): null}
         {screenName === "Search" ? (
            <Stack.Screen name={"Search"} component={Search} />
            ): null}
         {screenName === "Notification" ? (
            <Stack.Screen name={"Notification"} component={Notification} />
            ): null}
         {screenName === "Me" ? (
            <Stack.Screen name={"Me"} component={Me} />
            ): null}
        <Stack.Screen name="UploadNav" options={{ headerShown: false }} component={UploadNav}/>
        <Stack.Screen name="UploadForm" component={UploadForm}/>
        <Stack.Screen name="MessagesNav" options={{ headerShown: false }} component={MessagesNav}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Photo" options={{ headerShown: false }} component={Photo}/>
    </Stack.Navigator>
}