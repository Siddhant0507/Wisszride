import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import React from 'react'

const Otp = () => {
    const [number, onChangeNumber] = React.useState(null);
 
    return (
        <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter OTP"
          keyboardType="numeric"
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

export default Otp