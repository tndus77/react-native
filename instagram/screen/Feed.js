import React, {useQuery} from "react";
import { View, Text, FlatList } from "react-native";
import { gql } from "@apollo/client";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragment";
import ScreenLayout from "../componenets/ScreenLayout";

// const FEED_QUERY = gql`
// query seeFeed($offset: Int!) {
//     seeFeed(offset: $offset) {
//     id
//     user {
//         username
//         avatar
//     }
//     file
//     caption
//     likes
//     commentNumber
//     createdAt
//     isMine
//     isLiked
//     comments {
//         id
//         user {
//         username
//         avatar
//         }
//         payload
//         isMine
//         createdAt
//     }
// }
// }
// `

export default function Feed({ navigation }) {

    // const {data, loading} = useQuery(FEED_QUERY)
    // const renderPhoto = ({ item: photo}) => {
    //     return(
    //         <View style={{ flex: 1 }}>
    //             <Text style={{ color: "white" }}>{photo.caption}</Text>
    //         </View>
    //     )
    // }
    return(
        // <ScreenLayout loading={loading}>
        //     <FlatList
        //      data = {data?.seeFeed}
        //      keyExtractor={photo => photo.id}
        //      renderItem={renderPhoto}
        //      />

        // </ScreenLayout>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center", backgroundColor: "black"}}>
            <Text style={{ color: "white"}}>Feed</Text>
        </View>
    )
}