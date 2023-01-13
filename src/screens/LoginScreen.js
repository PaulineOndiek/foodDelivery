import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({navigation}) => {

const auth = getAuth();
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

  const [text, onChangeText] = React.useState(null);
//   const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Email Address"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={text}
        placeholder="Password"
      />

      <Button
        title="Login"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    {/* <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Register')}
      /> */}

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