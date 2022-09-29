import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Vie } from 'react-native';
import PhoneNumber from './Screens/PhoneNumber';
import HomeScreen from './Screens/HomeScreen'
import Otp from './Screens/Otp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = creatStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// how to make a react navigation ?