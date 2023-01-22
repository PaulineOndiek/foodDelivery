import { createUserWithEmailAndPassword } from "firebase/auth";
import { View,Text, TextInput, TouchableOpacity, StyleSheet, Button, Image } from "react-native";
import { useState } from "react";
import { auth } from "../Firebase"

const RegisterScreen=({navigation})=>{
    const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [phone,setPhone]=useState("")
  
  const registerUser=()=>{
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
          navigation.navigate('Login')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
      }
        


   return(

    <View>
      {/* <Image source={require("./../../assets/food.avif")} style={{width: 100, height:100}}/> */}
        <TextInput
         style={styles.input}
         onChangeText={text=>setName(text)}
         value={name}
         placeholder="Username"
       />
        <TextInput 
        style={styles.input}
        value={phone}
        placeholder="Phone Number"/>
        
       <TextInput
       style={styles.input}
       onChangeText={text=>setEmail(text)}
       value={email}
       placeholder="Email Address"
       />

       <TextInput
       style={styles.input}
       onChangeText={text => setPassword(text)}
       value={password}
       placeholder="Password"
       />

       <Button
        title="Register" 
        onPress={registerUser}
      />
        
        <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        >
           <Text>Login</Text>
        </TouchableOpacity>

    </View>
   )
}

const styles=StyleSheet.create({

})

export default RegisterScreen