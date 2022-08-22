import React from "react";
import { View, KeyboardAvoidingView, Image, StyleSheet, TextInput } from "react-native";

export default function Login({ navigation }) {
    return(
        <View style={styles.container}>
            <Image
             style={{
                resizeMode: "contain",
                height: 100,
                width: 350,
                tintColor: 'white'
             }}
             source={require("../assets/logo.png")}
             />
            <KeyboardAvoidingView 
             style={{
                width: '100%',
                flex: 1,
             }}
             behavior="position" 
             keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0}>
                <TextInput
                placeholder="아이디"
                secureTextEntry
                returnKeyType="next"
                color= 'white'
                style={styles.textInput}
                />
                <TextInput
                placeholder="비밀번호"
                secureTextEntry
                returnKeyType="done"
                color= 'white'
                style={styles.textInput}
                />
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    textInput: {
        backgroundColor: 'gray',
        padding: 10,
        marginBottom: 5,
        borderRadius: 3,
        width: '100%',
        color: 'white',
        opacity: 0.5
    }
})