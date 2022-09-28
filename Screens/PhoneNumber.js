import { SafeAreaView, StyleSheet, TextInput,Button } from "react-native";
import React from 'react'

const PhoneNumber = () => {
        const [number, onChangeNumber] = React.useState(null);
      const SendOtp = ()=>{
        console.log("button Click")

      }
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter Your Phone Number"
        keyboardType="numeric"
      />
         <Button
        style={styles.input}
        title="Get OTP"
        color="#5D6D7E"
        onPress={SendOtp()}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default PhoneNumber