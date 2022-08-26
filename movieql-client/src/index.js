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
const people = [
  {
  name: "sooyeon",
  age: 24,
  gender: "female"
 },
 {
  name: "josiu",
  age: 21,
  gender: "female"
 },
 {
  name: "sn",
  age: 19,
  gender: "male"
 },
 {
  name: "sdfd",
  age: 19,
  gender: "female"
 },
 {
  name: "qerq",
  age: 20,
  gender: "male"
 },
 {
  name: "dalk",
  age: 99,
  gender: "female"
 },
]

const server = createServer({
  schema: {
    typeDefs: /* GraphQL */ `
      type Person {
        name: String
        age: Int
        gender: String
      }

      type Query {
        people: [Person]!
        person(id: Int!): Person
      }
    `,
    resolvers: {
      Query: {
        people: () => people,
      },
    },
  },
})

server.start(console.log("hihi"));