import React from "react";
import { View, FlatList, Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import ScreenLayout from "../componenets/ScreenLayout";

const RoomContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 15px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Column = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 20px;
`;
const Data = styled.View``;
const UnreadDot = styled.View`
  width: 10px;
  border-radius: 5px;
  height: 10px;
  background-color: blue;
`;
const Username = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;
const UnreadText = styled.Text`
  color: white;
  margin-top: 2px;
  font-weight: 500;
`;

export default function Rooms({ navigation }) {
    const room = [
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

    const FlatListItemSeperator = () => {
        return(
            <View
            style={{
              width: "100%",
              height: 5,
              backgroundColor: "gray",
            }}
          ></View>
        )
    }
    
    return <ScreenLayout>
        <FlatList
        style={{ width: "100%" }}
        data={room}
        keyExtractor={(room) => room.id}
        renderItem={({ item }) => (
            <RoomContainer onPress={navigation.navigate('Room', {username: item.username})}>
                <Column>
                <Avatar source={require('../assets/zzang.png')} />
                <Data>
                    <Username>{item.username}</Username>
                    <UnreadText>
                    {item.unreadTotal} unread{" "}
                    {item.unreadTotal === 1 ? "message" : "messages"}
                    </UnreadText>
                </Data>
                </Column>
                <Column>{item.unreadTotal !== 0 ? <UnreadDot /> : null}</Column>
            </RoomContainer>
          )}
      />
    </ScreenLayout>
}