import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Vie } from 'react-native';
import PhoneNumber from './Screens/PhoneNumber';
import Otp from './Screens/Otp';
import "react-native-gesture-handler"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = creatStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <SafeAreaView style={styles.container}>
      
      <Stack.Screen 
        name="PhoneNumber" 
        component={PhoneNumber} 
        options= {{
        headerShown:false ,
        }} />
      
      <Stack.Screen 
        name="Otp" 
        component={Otp} 
        options= {{
        headerShown:false ,
        }} />
      <StatusBar style="auto" />
    
    </SafeAreaView>
      </Stack.Navigator>
    </NavigationContainer>
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


// npx expo install react-native@0.69.6