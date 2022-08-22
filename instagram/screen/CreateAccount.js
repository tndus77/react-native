import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { colors } from "../color";

export default function CreateAccount({ navigation }) {
    const lastNameRef = useRef();
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [state, setState] = useState(true);

    const onNext = (nextOne) => {
        nextOne?.current?.focus();
    }

    const onDone = () => {
        setState(false);
        alert('Done!!');
    }
 
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                width: '100%'
             }}
             behavior="padding" 
             keyboardVerticalOffset={Platform.OS === "ios" ? 30 : 0}>
                <TextInput
                placeholder="이름"
                placeholderTextColor='white'
                returnKeyType="next"
                color= 'white'
                onSubmitEditing={() => onNext(lastNameRef)}
                style={styles.textInput}
                />
                <TextInput
                placeholder="성"
                ref={lastNameRef}
                placeholderTextColor='white'
                returnKeyType="next"
                onSubmitEditing={() => onNext(userNameRef)}
                style={styles.textInput}
                />
                <TextInput
                placeholder="닉네임"
                ref={userNameRef}
                placeholderTextColor='white'
                returnKeyType="next"
                onSubmitEditing={() => onNext(emailRef)}
                style={styles.textInput}
                />
                <TextInput
                placeholder="이메일"
                ref={emailRef}
                placeholderTextColor='white'
                returnKeyType="next"
                keyboardType="email-address"
                onSubmitEditing={() => onNext(passwordRef)}
                style={styles.textInput}
                />
                <TextInput
                placeholder="비밀번호"
                ref={passwordRef}
                placeholderTextColor='white'
                returnKeyType="done"
                secureTextEntry
                returnKeyLabel="계정 생성"
                style={styles.textInput}
                onSubmitEditing={onDone}
                />
            </KeyboardAvoidingView>
            <View style={styles.bg}>
                <Button title="계정 생성" color={'white'} disabled={state} onPress={() => {}}/>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>로그인</Text>                
            </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
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