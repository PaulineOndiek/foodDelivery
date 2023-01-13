import { View,TextInput } from "react-native"
import { getAuth, recaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {auth} from "../Firebase"
const NewScreen=()=>{

// const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);

auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

// const auth=getAuth()
const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;


signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });

    grecaptcha.reset(window.recaptchaWidgetId);

// Or, if you haven't stored the widget ID:
window.recaptchaVerifier.render().then(function(widgetId) {
  grecaptcha.reset(widgetId);
});



    return(
        <View>
            <TextInput 
            placeholder="Phone Nummber"
            style={styles.input}
            />
            <TextInput />
        </View>
    )
    
}
const styles=StyleSheet.create({
    
})

export default NewScreen