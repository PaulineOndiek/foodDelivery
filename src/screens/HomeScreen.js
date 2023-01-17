import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Data } from '../Data';
import { useEffect, useState } from 'react';
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-around',
    // width:"100%",
  },
  category: {
    flexDirection: "column",
    alignItems: "center",
  },
  images: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }
})

function Item(props) {
  return (
    <View style={styles.item}>
      <Text>{props.item.id}: {props.item.Name} ({props.item.Category})</Text>
    </View>
  );
}


const HomeScreen = ({ navigation }) => {
  const [fullData, setFullData] = useState(Data)
  const [status, setStatus] = useState("NONE")

 const filteredList= useEffect(() => {
    if (status === "NONE") return fullData
    return fullData.filter(item => status === item.Category)
  },[fullData, status])

  const onClick = (statu) => {
    console.log("nnnnnnnnnnnnn")
    setStatus(status)
    console.log(status)

  }
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.category}>
          <TouchableOpacity onPress={() =>  onClick("Beverages")}>
            <Image
              style={styles.images}
              source={require("./../../assets/burgers.jpeg")} />
            <Text>Burger</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <TouchableOpacity onPress={()=>{}}>
            <Image
              style={styles.images}
              source={require("./../../assets/pizzas.jpeg")} />
            <Text>Pizza</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <TouchableOpacity onPress={() => { }}>
            <Image
              style={styles.images}
              source={require("./../../assets/fastfoods.jpeg")} />
            <Text>Fast Foods</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.category}>
          <TouchableOpacity onPress={() => { }}>
            <Image
              style={styles.images}
              source={require("./../../assets/chicken.jpeg")} />
            <Text>Chicken</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <TouchableOpacity onPress={() => { }}>
            <Image
              style={styles.images}
              source={require("./../../assets/dessert.jpeg")} />
            <Text>Desserts</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.category}>
          <TouchableOpacity onPress={() => { }}>
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
      <FlatList
        style={styles.list}
        renderItem={Item}
        keyExtractor={(item) => item.Status}
        data={filteredList}
      />
        {/* <Text>item.</Text> */}


      </View>

    </ScrollView>


  )


}


export default HomeScreen