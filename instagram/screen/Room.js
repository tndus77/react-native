import React, { useEffect } from "react";
import { View, Text, KeyboardAvoidingView, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ScreenLayout from "../componenets/ScreenLayout";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

// const ROOM_QUERY = gql`
//   query seeRoom($id: Int!) {
//     seeRoom(id: $id) {
//       messages {
//         id
//         payload
//         user {
//           username
//           avatar
//         }
//         read
//       }
//     }
//   }
// `;

const data = [
    { 
        username: "sooyeon",
        likes: 1,
        createdAt: "2020.03.01",
        unreadTotal: "1"
    },
    {
        username: "dasol",
        likes: 1,
        createdAt: "2020.03.01",
        unreadTotal: "2"
    },
    {
        username: "dayeon",
        likes: 1,
        createdAt: "2020.03.01",
        unreadTotal: "0"
    },
    {
        username: "soomin",
        likes: 1,
        createdAt: "2020.03.01",
        unreadTotal: "4"
    },
    {
        username: "sami",
        likes: 1,
        createdAt: "2020.03.01",
        unreadTotal: "1"
    }
    ];

    const MessageContainer = styled.View``;
    const Author = styled.View``;
    const Avatar = styled.Image`
    height: 20px;
    width: 20px;
    border-radius: 25px;
    `;
    const Message = styled.Text`
        color: white;
        background-color: rgba(255, 255, 255, 0.3);
        padding: 5px 10px;
        overflow: hidden;
        border-radius: 10px;
        font-size: 16px;
        margin: 0px 10px;
    `;
    const TextInput = styled.TextInput`
        border: 1px solid rgba(255, 255, 255, 0.5);
        padding: 10px 20px;
        color: white;
        border-radius: 1000px;
        width: 90%;
        margin-right: 10px;
        `;

    const InputContainer = styled.View`
        width: 95%;
        margin-bottom: 50px;
        margin-top: 25px;
        flex-direction: row;
        align-items: center;
    `;


    const SendButton = styled.TouchableOpacity``;
    

export default function Room({ route, navigation }) {

    useEffect(() => {
        navigation.setOptions({
            title: route?.params?.username
        })
    }, [])

    const renderItem = ({ item: data }) => (
        <MessageContainer>
          <Author>
            <Avatar source={ require('../assets/zzang.png') } />
            <Username>{item.username}</Username>
          </Author>
          <Message>{item.unreadTotal}</Message>
        </MessageContainer>
      );

    return  <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "black" }}
        behavior="height"
        keyboardVerticalOffset={50}>
        <ScreenLayout>
        <FlatList
            inverted
            style={{ width: "100%", paddingVertical: 10 }}
            data={data?.seeRoom?.messages}
            keyExtractor={(message) => "" + message.id}
            renderItem={renderItem}
        />
        <InputContainer>
            <TextInput
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
                placeholder="Write a message..."
                returnKeyLabel="Send Message"
                returnKeyType="send"
                // onChangeText={(text) => setValue("message", text)}
                // onSubmitEditing={handleSubmit(onValid)}
                // value={watch("message")}
            />
            <SendButton
                onPress={() => {}}
                //disabled={!Boolean(watch("message"))}
            >
                <Ionicons
                name="send"
                color={
                    "white"
                }
                size={22}
                />
            </SendButton>
          </InputContainer>
        </ScreenLayout>
    </KeyboardAvoidingView>
}