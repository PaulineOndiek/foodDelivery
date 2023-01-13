/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View,Text,Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen'
import DisplayScreen from './src/screens/DisplayScreen'
import LoginScreen from './src/screens/LoginScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'



const Stack = createNativeStackNavigator();


const App=()=>{
return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Register'>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen}/>                                                    
  {/* <View style={StyleSheet.container}> */}
    
   {/* <Text>Hello</Text>  */}
  

   



{/* </View> */}
</Stack.Navigator>
</NavigationContainer>
)
}
export default App