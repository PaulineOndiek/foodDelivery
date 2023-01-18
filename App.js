/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen'
import DisplayScreen from './src/screens/DisplayScreen'
import LoginScreen from './src/screens/LoginScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'
import NewScreen from './src/screens/NewScreen';
import CategoryScreen from './src/screens/CategoryScreen';

const Stack = createNativeStackNavigator();

const App=()=>{
return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen}/>    
      <Stack.Screen name="New" component={NewScreen}/>   
      <Stack.Screen name="Category" component={CategoryScreen}/>  
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Display" component={DisplayScreen} />                          

</Stack.Navigator>
</NavigationContainer>
)
}

export default App