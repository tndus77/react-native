import { StyleSheet, Appearance, useColorScheme } from 'react-native';
import {LoggedOutNav} from './navigators/LoggedOutNav';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { ApolloProvider, useReactiveVar } from '@apollo/client';
import { isLoggedInVar } from './apollo';
import LoggedInNav from './navigators/LoggedInNav';
import client from './apollo';

export default function App() {
  const light = Appearance.getColorScheme() === "light";
  const colorScheme = useColorScheme();

  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <NavigationContainer>
          <LoggedInNav/>
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
