import { ApolloClient, InMemoryCache, ApolloProvider, gql, makeVar, createHttpLink } from '@apollo/client';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import {setContext} from "@apollo/client/link/context";

export const isLoggedInVar = makeVar(false)
export const tokenVar = makeVar("");

const TOKEN = "token";

export const logUserIn = async (token) => {
  await AsyncStorage.multiSet([
    [TOKEN, token],
    ["loggedIn", "yes"],
  ]);
  isLoggedInVar(true);
  tokenVar(token);
};

export const logUserOut = async() => {
  await AsyncStorage.multiRemove(TOKEN);
  isLoggedInVar(false);
  tokenVar(null);
}

const httpLink = createHttpLink({
  uri: "http://0.0.0.0:4000/graphql",
})
const authLink = setContext((_, {headers}) => {
  return {
    headers: {
      ...headers,
      token: tokenVar()
    }
  }
})
const client = new ApolloClient({
    uri: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

export default client;
