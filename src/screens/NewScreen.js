import { View, TextInput, StyleSheet, Button } from "react-native"
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth } from "../Firebase"
import { useState } from "react";

const NewScreen = (navigation) => {
  const [phone, setPhone] = useState("")
  const [code, setCode] = useState("")

  const generateRecaptcha = () => {

    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.

      }
    }, auth);
  }

  const requestOTP = (e) => {
    e.preventDefault()
    generateRecaptcha()
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      }).catch((error) => {
        console.log(error)
      });

  }


  const verifyOTP = (e) => {
    let otp = e.target.value;
    setCode(otp)

    let confirmationResult = window.confirmationResult
    confirmationResult.confirm(otp).then((result) => {
      const user = result.user;
      console.log(user)
    }).catch((error) => {
      console.log(error)
    })
  }


  return (
    <View>

      <TextInput
        placeholder="Phone Nummber"
        onChangeText={text => setPhone(text)}
        style={styles.input}
        value={phone}
      />
      <TextInput
        placeholder="Enter OTP"
        onChangeText={verifyOTP}
        style={styles.input}
        value={code}
      />

      <Button
        title="Register"
        onPress={requestOTP}
      />

      <View id="sign-in-button">

      </View>

    </View>
  )

}
const styles = StyleSheet.create({

})

export default NewScreen

