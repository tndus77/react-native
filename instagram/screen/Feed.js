import React, {useQuery} from "react";
import { View, Text, FlatList, StyleSheet, StatusBar, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import { gql } from "@apollo/client";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragment";
import ScreenLayout from "../componenets/ScreenLayout";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Feed({ navigation }) {
    const data = [
    {
        username: "sooyeon",
        likes: 1,
        createdAt: "2020.03.01"
    },
    {
        username: "dasol",
        likes: 1,
        createdAt: "2020.03.01"
    },
    {
        username: "dayeon",
        likes: 1,
        createdAt: "2020.03.01"
    },
    {
        username: "soomin",
        likes: 1,
        createdAt: "2020.03.01"
    },
    {
        username: "sami",
        likes: 1,
        createdAt: "2020.03.01"
    }
]
const { width, height} = useWindowDimensions();

const RenderItem = ({ item, id }) => (
    <View
        key={id}
      style={{
        borderRadius: 10,
        justifyContent: 'center',
        margin: 10
      }}>
    <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.navigate('Profile')}>
        <Image
        resizeMode="cover"
        source={require('../assets/zzang.png')}
        style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginBottom: 10
        }}/>
        <Text style={{fontSize: 15, color: 'white', alignSelf: 'center', margin: 10}}>{item.username}</Text>
     </TouchableOpacity>
      <Image style={{ width, height: height - 600}} source={require('../assets/photo.jpeg')} />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="white" style={{size: 25, margin: 10}}/>
        </TouchableOpacity>
        <TouchableOpacity>
                <Ionicons name="send-outline" size={24} color="white" style={{size: 25, margin: 10}}/>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 15, color: 'white'}}>{item.username}</Text>
      <Text style={{fontSize: 15, color: 'white'}}>{item.likes}</Text>
      <Text style={{fontSize: 15, color: 'white'}}>{item.createdAt}</Text>
    </View>
  );

    return(
        <SafeAreaView style={styles.container}>
        <FlatList
             data = {data}
             keyExtractor={(item) => item.id}
             renderItem={RenderItem} 
             showsVerticalScrollIndicator={false}
             />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      backgroundColor: 'black'
    }
})