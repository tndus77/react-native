import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import {
  Image,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { gql, useMutation, useReactiveVar } from "@apollo/client";
import Comments from "./Comments";

const TOGGLE_LIKE_MUTATION = gql`
  mutation toggleLike($id: Int!) {
    toggleLike(id: $id) {
      ok
      error
    }
  }
`;

const Container = styled.View``;
const Header = styled.View`
  padding: 10px 10px;
  flex-direction: row;
  align-items: center;
`;
const UserAvatar = styled.Image`
  margin-right: 10px;
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
`;
const Username = styled.Text`
  color: white;
  font-weight: 600;
`;
const File = styled.Image``;
const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Action = styled.TouchableOpacity`
  margin-right: 10px;
`;
const Caption = styled.View`
  flex-direction: row;
`;
const CaptionText = styled.Text`
  color: white;
  margin-left: 5px;
`;
const Likes = styled.View`
  flex-direction: row;
`;
const LikesNum = styled.Text`
  color: white;
  margin: 7px 0px;
  font-weight: 600;
`;
const ExtraContainer = styled.View`
  padding: 10px;
`;

const CommentCount = styled.Text`
  opacity: 0.7;
  margin: 5px 0px;
  color: white;
`;

function Photo({
  id,
  user,
  caption,
  file,
  isLiked,
  likes,
  commentNumber,
  comments,
}) {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const [imageHeight, setImageHeight] = useState(height);
  useEffect(() => {
    Image.getSize(file, (imageWidth, imageHeight) => {
      setImageHeight(height - 450);
    });
  });

  const updateToggleLike = (cache, result) => {
    const {
      data: {
        toggleLike: { ok },
      },
    } = result;
    if (ok) {
      cache.writeFragment({
        id: `Photo:${id}`,
        fragment: gql`
          fragment BSName on Photo {
            isLiked
            likes
          }
        `,
        data: {
          isLiked: !isLiked,
          likes: isLiked ? likes - 1 : likes + 1,
        },
      });
    }
  };
  const [toggleLike] = useMutation(TOGGLE_LIKE_MUTATION, {
    variables: {
      id,
    },
    update: updateToggleLike,
  });
  const goToProfile = () => {
    navigation.navigate("Profile", {
      username: user.username,
      id: user.id,
    });
  };
  const goToComments = () => {
    navigation.navigate("PhotoComments", {
      photoId: id,
      isFeed: false,
    });
  };
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={goToProfile}>
          <UserAvatar resizeMode="cover" source={{ uri: user?.avatar }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToProfile}>
          <Username>{user?.username}</Username>
        </TouchableOpacity>
      </Header>
      <File
        resizeMode="cover"
        style={{ width, height: imageHeight }}
        source={{ uri: file }}
      />
      <ExtraContainer>
        <Actions>
          <Action>
            <Ionicons
              onPress={() => toggleLike()}
              name={isLiked ? "heart" : "heart-outline"}
              color={isLiked ? "tomato" : "white"}
              size={28}
            />
          </Action>
          <Action onPress={goToComments}>
            <Ionicons name="chatbubble-outline" color="white" size={25} />
          </Action>
        </Actions>
        <Likes>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Likes", {
                photoId: id,
              })
            }
          >
            <LikesNum>{likes === 1 ? "1 like" : `${likes} likes`}</LikesNum>
          </TouchableOpacity>
        </Likes>
        <Caption>
          <TouchableOpacity onPress={goToProfile}>
            <Username>{user?.username}</Username>
          </TouchableOpacity>
          <CaptionText>{caption}</CaptionText>
        </Caption>
        <TouchableOpacity onPress={goToComments}>
          <CommentCount>
            {commentNumber === 1
              ? " 1 comment"
              : `View all ${commentNumber} comments`}
          </CommentCount>
        </TouchableOpacity>
        <Caption>
          <Comments
            route={{
              params: {
                photoId: id,
                comments: comments,
                isFeed: true,
              },
            }}
          ></Comments>
        </Caption>
      </ExtraContainer>
    </Container>
  );
}

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
  }),
  caption: PropTypes.string,
  file: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  commentNumber: PropTypes.number.isRequired,

  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      payload: PropTypes.string,
      isMine: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
      user: PropTypes.shape({
        avatar: PropTypes.string,
        username: PropTypes.string.isRequired,
      }),
    })
  ),
};
export default Photo;