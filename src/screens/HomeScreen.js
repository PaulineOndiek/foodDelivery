import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, FlatList, ImageBackground} from 'react-native';
import { Data } from '../Data';
import {useState } from 'react';

const image={uri:"https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=800"}
const image1={uri:"https://images.pexels.com/photos/7000842/pexels-photo-7000842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
const image2={uri:"https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-around'
  },
  category: {
    flex:1,
    justifyContent:"center",
    alignItems: "center",
  },
  special:{
    borderRadius:25,

  },
  images: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

image:{
  width:100,
  height:100,
 
  flex:1,
  flexDirection:"row",
  justifyContent:"space-between",
  // gap:5
},
pizza:{
width:100,
height:100,

},category:{
flex:1,
flexDirection:"row",

},

text:{
color:"white",
paddingTop:40,
paddingLeft:10,
fontSize:15,
fontWeight:"bold",
},
})

const HomeScreen = ({ navigation }) => {
  const [fullData, setFullData] = useState(Data)
  const [selectedCategory, setSelectedCategory] = useState("NONE")

  const filteredList=React.useMemo(() => {
    if (selectedCategory === "NONE") {
      return fullData
    }

  else{
    return fullData.filter(item => selectedCategory === item.Category)
  }
    
  },[fullData, selectedCategory])

  const onClick = (category) => {
    setSelectedCategory(category)
    navigation.navigate("Category", {items:filteredList})
    console.log(selectedCategory)
  
  }
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.category}>
          <TouchableOpacity onPress={()=> onClick("Burgers")}>
            <Image
              style={styles.images}
              source={require("./../../assets/burgers.jpeg")} />
            <Text>Burger</Text>
            
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <TouchableOpacity onPress={()=>{onClick("Pizza")}}>
            <Image
              style={styles.images}
              source={require("./../../assets/pizzas.jpeg")} />
            <Text>Pizza</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <TouchableOpacity onPress={() => {onClick("Fast Foods")}}>
            <Image
              style={styles.images}
              source={require("./../../assets/fastfoods.jpeg")} />
            <Text>Fast Foods</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.category}>
          <TouchableOpacity onPress={() => {onClick("Chicken")}}>
            <Image
              style={styles.images}
              source={require("./../../assets/chicken.jpeg")} />
            <Text>Chicken</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <TouchableOpacity onPress={() => {onClick("Desserts")}}>
            <Image
              style={styles.images}
              source={require("./../../assets/dessert.jpeg")} />
            <Text>Desserts</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <TouchableOpacity onPress={() => {onClick("Local Foods")}}>
            <Image
              style={styles.images}
              source={require("./../../assets/fish.jpeg")} />
            <Text>Local Foods</Text>
          </TouchableOpacity>
        </View>

      </View>
      <Text>Special Menu</Text>
      <View style={styles.container}>
        
        <View style={styles.special}>
        <ImageBackground
        resizeMode='cover'
        style={styles.image}
        source={image}>
        <Text style={styles.text}>Fast Foods</Text>
        </ImageBackground>
        </View>

        <View>
        <ImageBackground
        style={styles.image}
        source={image1}>
        <Text style={styles.text}>Local Foods</Text>
        </ImageBackground>
        </View>

        <View>
        <ImageBackground
        source={image2}
        style={styles.image}
        >
        <Text style={styles.text}>Pizza</Text>
        </ImageBackground>
        </View>      
    
      </View>
 
      <View style={styles.category}>
      <Text>Popular Items</Text>
      <View>
       
        <Image  style={styles.pizza} source={require("./../../assets/pepperoni.jpeg")}/>
        <Text>Pepperoni Pizza</Text>
        <Text>Kshs. 1,500</Text>
        <Text>Add to Cart</Text>
          </View>
        <View>
        <Image style={styles.pizza} source={require("./../../assets/chickenb.jpeg")} />
        <Text>Chicken burrito </Text>
        <Text>Kshs. 1250</Text>
        <Text>Add to Cart</Text>

        
      </View>
      <View>
        <Image style={styles.pizza}source={require("./../../assets/sandwich.jpeg")}/>
        <Text>Sandwich</Text>
        <Text>Kshs. 2,000</Text>
        <Text>Add to Cart</Text>
      </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
      >
        <Text>Go to Register</Text>

      </TouchableOpacity>


    </ScrollView>


  )
}

export default HomeScreen