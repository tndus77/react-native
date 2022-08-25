import React from "react";

export default function ScreenLayout({ loading, children}) {
    function ScreenLayout({ loading, children }) {
        return <View style={{ 
            backgroundColor: light ? "#FFFFFF" : "#000000", 
            flex: 1, 
            alignItems: "center", 
            justifyContent: "center" 
        }}>
            {loading ? <ActivityIndicator size={30} style={{ width: "100%", height: "100%" }} color={light ? "#000000" : "#FFFFFF"} /> : children}
        </View>;
    };
}