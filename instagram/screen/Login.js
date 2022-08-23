import React, {useEffect, useRef} from "react";
import { useForm } from "react-hook-form";
import { View, Button, Image, StyleSheet, TextInput, TouchableWithoutFeedback, Platform, Keyboard } from "react-native";
import { colors } from '../color';

export default function Login({ navigation }) {
    const { register, handleSubmit, setValue } = useForm();
    
    /*Keyboard return 시 다음 input focus */
    const passwordRef = useRef();
    const onNext = (nextOne) => {
        nextOne?.current?.focus();
    }
    const onValid = (data) => {
        console.log(data)
    };
    useEffect(() => {
        register("닉네임")
        register("비밀번호")
    }, [register]);

    return(
        <TouchableWithoutFeedback 
         style={{ flex : 1 }}
         onPress={Keyboard.dismiss}
         disabled={Platform.OS === 'web'}>
        <View style={styles.container}>
            <Image
             style={{
                resizeMode: "contain",
                height: 100,
                width: 350,
                tintColor: 'white',
                marginBottom: 15
             }}
             source={require("../assets/logo.png")}
             />
            <TextInput
                placeholder="닉네임"
                secureTextEntry
                autoCapitalize="none"
                returnKeyType="next"
                tintColor='white'
                placeholderTextColor='white'
                style={styles.textInput}
                onSubmitEditing={() => onNext(passwordRef)}
                onChangeText={(text) => setValue("닉네임", text)}
            />
            <TextInput
                ref={passwordRef}
                placeholder="비밀번호"
                secureTextEntry
                returnKeyType="done"
                placeholderTextColor='white'
                style={styles.textInput}
                onSubmitEditing={handleSubmit(onValid)}
                onChangeText={(text) => setValue("비밀번호", text)}
            />
            <View style={styles.bg}>
                <Button title="로그인" color={'white'} onPress={handleSubmit(onValid)}/>
            </View>
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