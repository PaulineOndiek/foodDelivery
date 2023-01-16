import * as React from 'react';
import { Data } from '../Data';
import { Button, View, Text, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen=({navigation})=>{
    return(     
        <View>
<Image source={require("./../../assets/pizza.avif")}/>

<TouchableOpacity
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        <Text>Go to Register</Text>

      </TouchableOpacity>
        </View>
    )
}


export default HomeScreen