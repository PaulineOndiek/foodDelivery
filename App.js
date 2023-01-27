// import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import RegisterScreen from './src/screens/RegisterScreen'
import DisplayScreen from './src/screens/DisplayScreen'
import LoginScreen from './src/screens/LoginScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'
import NewScreen from './src/screens/NewScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import InitialScreen from './src/screens/InitialScreen';
import SingleItemScreen from './src/screens/SingleItemScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CartScreen from './src/screens/CartScreen';
import States from './Context/States';
// import { States } from './Context/States';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator()

// <States>
// <NavigationContainer>
function MyStack() {
  return (

    <Stack.Navigator initialRouteName='Welcome'>

      <Stack.Screen name="Home" component={DrawerNavigator} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="New" component={NewScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Display" component={DisplayScreen} />
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="Single Item" component={SingleItemScreen} />

    </Stack.Navigator>



  )
}

function DrawerNavigator() {
  // navigation.toggleDrawer();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Homee" component={HomeScreen} />
      <Drawer.Screen name="Register" component={RegisterScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  )
}


const App = () => {
  return (
    <States>
      <NavigationContainer>

        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Homes" component={MyStack} />
          <Tab.Screen name="Cart" component={CartScreen}/>
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>

      </NavigationContainer>
    </States>
  )
}

export default App