import React from "react";
import { View } from "react-native";

export default function ScreenLayout({ loading, children}) {
    return <View style={{ 
            backgroundColor: 'black', 
            flex: 1, 
            alignItems: "center", 
            justifyContent: "center" 
        }}>
            {loading ? <ActivityIndicator size={30} style={{ width: "100%", height: "100%" }} color={light ? "#000000" : "#FFFFFF"} /> : children}
        </View>
}