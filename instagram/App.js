import { StyleSheet, Text, View, Appearance, useColorScheme } from 'react-native';
import {LoggedOutNav} from './navigators/LoggedOutNav';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';

export default function App() {
  const light = Appearance.getColorScheme() === "light";
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider>
      <NavigationContainer>
        <LoggedOutNav/>
      </NavigationContainer>
    </ThemeProvider>
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
