import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen=({navigation})=>{
    return(
        <View>
            <Text>Hello World</Text>
            <TouchableOpacity
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        <Text>Go to Register</Text>
      </TouchableOpacity>
        </View>
    )
}

export default HomeScreen