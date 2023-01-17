import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image,StyleSheet, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles=StyleSheet.create({
  container:{ 
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:'space-around',
    // width:"100%",
  },
  category:{
    flexDirection:"column",
    alignItems:"center",
  },
  images:{
  width:100,
  height:100,
  borderRadius:50,
}
})

const HomeScreen=({navigation})=>{
    return(    
      <ScrollView> 
        <View style={styles.container}>
          
          <View style={styles.category}>
            <TouchableOpacity>
<Image 
style={styles.images}
source={require("./../../assets/burgers.jpeg")}/>
<Text>Burger</Text>
</TouchableOpacity>
</View>

<View style={styles.category}>
<TouchableOpacity>
<Image 
style={styles.images}
source={require("./../../assets/pizzas.jpeg")}/>
<Text>Pizza</Text>
</TouchableOpacity>
</View>

<View style={styles.category}>
<TouchableOpacity>
<Image 
style={styles.images}
source={require("./../../assets/fastfoods.jpeg")}/>
<Text>Fast Foods</Text>
</TouchableOpacity>
</View>
</View>

<View style={styles.container}>
<View style={styles.category}>
  <TouchableOpacity>
<Image 
style={styles.images}
source={require("./../../assets/chicken.jpeg")}/>
<Text>Chicken</Text>
</TouchableOpacity>
</View>

<View style={styles.category}>
<TouchableOpacity>
<Image 
style={styles.images}
source={require("./../../assets/dessert.jpeg")}/>
<Text>Desserts</Text>
</TouchableOpacity>
</View>

<View style={styles.category}>
<TouchableOpacity>
<Image 
style={styles.images}
source={require("./../../assets/fish.jpeg")}/>
<Text>Local Foods</Text>
</TouchableOpacity>
</View>

</View>

<TouchableOpacity
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        <Text>Go to Register</Text>

      </TouchableOpacity>
        
        </ScrollView>
    )
}


export default HomeScreen