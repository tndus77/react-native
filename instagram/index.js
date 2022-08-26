// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import { createServer } from '@graphql-yoga/node'
const seeFeed = [
  {
    id: 1,
    user: {
        username: "soo",
        avatar: "soo"
    },
    file: "hi",
    caption: "hi",
    likes: 1,
    commentNumber: 3,
    createdAt: "2020.03",
    isMine: true,
    isLiked: false
 },
 {
    id: 1,
    user: {
        username: "soo",
        avatar: "soo"
    },
    file: "hi",
    caption: "hi",
    likes: 1,
    commentNumber: 3,
    createdAt: "2020.03",
    isMine: true,
    isLiked: false
 },{
    id: 1,
    user: {
        username: "soo",
        avatar: "soo"
    },
    file: "hi",
    caption: "hi",
    likes: 1,
    commentNumber: 3,
    createdAt: "2020.03",
    isMine: true,
    isLiked: false
 },{
    id: 1,
    user: {
        username: "soo",
        avatar: "soo"
    },
    file: "hi",
    caption: "hi",
    likes: 1,
    commentNumber: 3,
    createdAt: "2020.03",
    isMine: true,
    isLiked: false
 },{
    id: 1,
    user: {
        username: "soo",
        avatar: "soo"
    },
    file: "hi",
    caption: "hi",
    likes: 1,
    commentNumber: 3,
    createdAt: "2020.03",
    isMine: true,
    isLiked: false
 }
]

const server = createServer({
  schema: {
    typeDefs: /* GraphQL */ `
      type seeFeed {
        id: Int
        user: [user]
        file: String
        caption: String
        likes: Int
        commentNumber: Int
        createdAt: String
        isMine: Boolean
        isLiked: Boolean
      }
      type user {
        username: String
        avator: String
      }
      type Query {
        user: [user]!
        seeFeed(offset: Int!): seeFeed
      }
    `,
    resolvers: {
      Query: {
        seeFeed: () => seeFeed,
      },
    },
  },
})

server.start(console.log("hihi"));