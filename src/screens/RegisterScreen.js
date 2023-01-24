import { createUserWithEmailAndPassword } from "firebase/auth";
import { View,Text, TextInput, TouchableOpacity, StyleSheet, Button, Image } from "react-native";
import { useState } from "react";
import { auth } from "../Firebase"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";

const RegisterScreen=({navigation})=>{
    // const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  // const [phone,setPhone]=useState("")
  // const [users,setUsers]=useState({
  //   name:"",
  //   email:"",
  //   password:"",
  //   phone:""
     
  // })

  const registerUser=async()=>{

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)

          // ...
          navigation.navigate('Login')
        })
        .catch((error) => {
          console.log(error)
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // ..
          })
          
            // // .then
            //   try {
            //     const docRef = await addDoc(collection(db, "users"), {
            //      name:"",
            //      email:"",
            //      password:"",
            //      phone:"",   
            //     });
            //     console.log("Document written with ID: ", docRef.id);
            //   } catch (e) {
            //     console.error("Error adding document: ", e);
            //   }
            // // )
      
      }
        


   return(

    <View>
      {/* <Image source={require("./../../assets/food.avif")} style={{width: 100, height:100}}/> */}
        {/* <TextInput
         style={styles.input}
         onChange={text=>setName(text)}
         value={name}
         placeholder="Username"
       /> */}

        {/* <TextInput 
        style={styles.input}
        onChange={text=>setPhone(text)}
        value={phone}
        placeholder="Phone Number"/> */}
        
       <TextInput
       style={styles.input}
       onChange={text=>setEmail(text)}
       value={email}
       placeholder="Email Address"
       />

       <TextInput
       style={styles.input}
       onChange={text => setPassword(text)}
       value={password}
       placeholder="Password"
       />

       <TouchableOpacity style={styles.button} onPress={registerUser}>
        <Text style={styles.texts}>Register</Text> 
        {/* {navigation.navigate("Login")} */}
        </TouchableOpacity>
      
{/*         
        <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        >
           <Text>Login</Text>
        </TouchableOpacity> */}

    </View>
   )
}

const styles=StyleSheet.create({
button:{
  width:380,
  height:45,
  backgroundColor:"#52AC3C",
  borderRadius:5,
  top:40,
  left:15,
  borderColor:"#52AC3C",

},

texts:{
  color:"white",
  top:10,
  left:145,
  fontSize:21,
},

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,

  },
 
})

export default RegisterScreen