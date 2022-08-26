import React, { useEffect } from "react";
import { View, Text } from "react-native";

export default function Profile({ navigation, route}) {
    useEffect(() => {
        navigation.setOptions({
            title: "Sooyeon Profile",
            headerTintColor: "white"
        })
    })
    return(
        <View style={{ backgroundColor: "black", flex: 1}}>
            <Text style={{ color: "white" }}>Someones Profile</Text>
        </View>
    )
}