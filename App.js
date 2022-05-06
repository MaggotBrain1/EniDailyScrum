import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Home} from "./Components/Home";
import { NavigationContainer } from '@react-navigation/native';
import Nav from "./Nav/Nav";

export default function App() {
  return (
        <NavigationContainer style={styles.container}>
          <Nav/>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
