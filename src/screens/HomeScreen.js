import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Data } from '../Data';
import {useState } from 'react';


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-around',
    // width:"100%",
  },
  category: {
    flex:1,
    justifyContent:"center",
    // flexDirection: "column",
    alignItems: "center",
  },
  images: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }
})

const HomeScreen = ({ navigation }) => {
  const [fullData, setFullData] = useState(Data)
  const [selectedCategory, setSelectedCategory] = useState("NONE")

  const filteredList=React.useMemo(() => {
    if (selectedCategory === "NONE") return fullData

    return fullData.filter(item => selectedCategory === item.Category)
  },[fullData, selectedCategory])

  const onClick = (cat) => {
    setSelectedCategory(cat)
    navigation.navigate("Category", {items:filteredList})
    console.log(selectedCategory)
    // console.log(filteredList)

    
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
            {/* <Text>{navigation.navigate("CategoryScreen")}</Text> */}
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <TouchableOpacity onPress={()=>{onClick("Pizza"),{Category:""}}}>
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

      <TouchableOpacity
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        <Text>Go to Register</Text>

      </TouchableOpacity>

      <View>
      {/* <FlatList
      data={filteredList}
      renderItem={Item}
      /> */}
      </View>
    </ScrollView>


  )
}

export default HomeScreen