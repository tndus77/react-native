import { useLazyQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { View, Text, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { logUserOut } from "../apollo";

export default function Search({ navigation }) {
    const {setValue, register, watch} = useForm();
    const SearchBox = () => (
        <TextInput 
        style={{ backgroundColor: "white"}}
        placeholderTextColor="black"
        placeholder="Search Photos"
        returnKeyLabel="Search"
        returnKeyType="search"
        />
    );
    

    useEffect(() => {
        navigation.setOptions({
            headerTitle: SearchBox,
        });
    }, []);

    return(
        <TouchableWithoutFeedback 
         style={{ flex : 1 }}
         onPress={Keyboard.dismiss}
         disabled={Platform.OS === 'web'}>
            <View style={{ backgroundColor: "black", flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={{ color: "white" }}>Search</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}