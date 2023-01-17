import React, { useState } from "react"; 
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase"

const LoginScreen = ({navigation}) => {
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
// const auth = getAuth();

const loginUser=()=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    navigation.navigate('Home')
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={text=>setEmail(text)}
        value={email}
        placeholder="Email Address"
      />
      <TextInput
        style={styles.input}
        onChangeText={text=>setPassword(text)}
        value={password}
        placeholder="Password"
      />
       <Button
        title="Login"
        onPress={loginUser}
      /> 

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginScreen;