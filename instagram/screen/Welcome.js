import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity, Button } from "react-native";
import { colors } from "../color";


export default function Welcome({ navigation }) {
    return(
        <View style={styles.container}>
            <Image
             style={{
                resizeMode: "contain",
                height: 100,
                width: 350,
                tintColor: 'white'
             }}
             source={require("../assets/logo.png")}/>
            <View style={styles.bg}>
                <Button title="계정 생성" color={'white'} onPress={() => navigation.navigate('CreateAccount')}/>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>로그인</Text>                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    bg: {
        backgroundColor: colors.blue,
        width: '100%',
        padding: 5,
        borderRadius: 5,
        justifyContent: 'space-around',
        marginTop: 30,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    loginText: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 10,
        color: colors.blue
    }
})