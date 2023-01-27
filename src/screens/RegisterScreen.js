import { createUserWithEmailAndPassword } from "firebase/auth";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, Image } from "react-native";
import { useState } from "react";
import { auth } from "../Firebase"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";
import { firebase } from "../config";
import { firestore } from "../config";

const RegisterScreen = ({ navigation }) => {
  // const [userData, setUserData]=useState({
  //   fullName:"",
  //   email:"",
  //   password:"",
  //   phone:""
  // })
  const [fullName,setFullName]=useState("")
  const [emailAddress, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone,setPhone]=useState("")

  const registerUser = async (email, password, phone, fullName) => {
    // console.log(email, phone, fullName)
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser.sendEmailVerification({
            handleCodeInApp: true,
            url: "https://testproject-6e1f5.firebaseapp.com",
          })
          .then(() => {
            alert("verification sent to the email");
            navigation.navigate("Login")
          })
          .catch((error) => {
            console.log(error);
          })
          .then(() => {
            firestore
              .collection("users")
              .doc(firebase.auth().currentUser.uid)
              .set({
                fnames:fullName,
                emailaddress:email,
                phoneNumber:phone,
              });
              // console.log(firebase.auth().currentUser)
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const registerUser = async () => {

  //   console.log("gcuyghgkj")
  //   createUserWithEmailAndPassword(auth, email, password).then((credentials) => {
  //     const user = credentials.user
  //     console.log(user)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  //   // createUserWithEmailAndPassword(auth, email, password)
  //   //   .then((userCredential) => {
  //   //     // Signed in 
  //   //     const user = userCredential.user;
  //   //     console.log(user)

  //   //     // ...
  //   //     navigation.navigate('Login')
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error)
  //   //   })

  //   // .then
  //   // try {
  //   //   const docRef = await addDoc(collection(db, "users"), {
  //   //    name:"",
  //   //    email:"",
  //   //    password:"",
  //   //    phone:"",   
  //   //   });
  //   //   console.log("Document written with ID: ", docRef.id);
  //   // } catch (e) {
  //   //   console.error("Error adding document: ", e);
  //   // }
  //   // )

  // }



  return (

    <View>
      {/* <Image source={require("./../../assets/food.avif")} style={{width: 100, height:100}}/> */}
      <TextInput
         style={styles.input}
         onChangeText={text=>setFullName(text)}
         value={fullName}
         placeholder="Username"
       /> 
        
        <TextInput
        style={styles.input}
        onChangeText={(text)=>setPhone(text)}
        value={phone}
        placeholder="Phone Number"
        />

      <TextInput
        style={styles.input}
        onChangeText={text=>setEmail(text)}
        value={emailAddress}
        placeholder="Email Address"
      />

      <TextInput
        style={styles.input}
        onChangeText={text=>setPassword(text)}
        value={password}
        placeholder="Password"
      />

      <TouchableOpacity style={styles.button} onPress={() => registerUser(emailAddress, password, phone, fullName)}>
        <Text style={styles.texts}>Register</Text>
        {/* {navigation.navigate("Login")} */}
      </TouchableOpacity>


      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        >
           <Text>Login</Text>
        </TouchableOpacity> */}

    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 380,
    height: 45,
    backgroundColor: "#52AC3C",
    borderRadius: 5,
    top: 40,
    left: 15,
    borderColor: "#52AC3C",

  },

  texts: {
    color: "white",
    top: 10,
    left: 145,
    fontSize: 21,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,

  },

})

export default RegisterScreen