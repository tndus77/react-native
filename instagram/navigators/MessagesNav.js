import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Room from "../screen/Room";
import Rooms from "../screen/Rooms";

const Stack = createStackNavigator();

export default function MessagesNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerBackTitleVisible: false,
        headerStyle: {
          borderBottomColor: "rgba(255, 255, 255, 0.3)",
          shadowColor: "rgba(255, 255, 255, 0.3)",
          backgroundColor: "black",
        },
        headerBackImage: ({ tintColor }) => (
          <Ionicons color={tintColor} name="chevron-down" size={28} />
        ),
      }}
    >
       <Stack.Screen
        name="Rooms"
        options={{
          headerBackImage: ({ tintColor }) => (
            <Ionicons color={tintColor} name="chevron-down" size={30} />
          ),
        }}
        component={Rooms}
      />
      <Stack.Screen name="Room" component={Room} />
    </Stack.Navigator>
  );
}
