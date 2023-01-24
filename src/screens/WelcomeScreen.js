import { View, Image, Text, StyleSheet, TouchableOpacity,} from "react-native"
// import { Header } from "react-native/Libraries/NewAppScreen"
// import Heading from 
const styles=StyleSheet.create({
image:{
    width:200,
    height:200,
    padding:30,
},
images:{
// flex:1,
flexDirection:"row",
justifyContent:"center"
},
container:{
    
    backgroundColor:"#52AC3C",

    height:"100%",
    // width:"80%",
 
    
},
heading:{
fontWeight:"bold",
fontSize:40,
// paddingLeft: 100,
color:"white"
},

text:{
    color:"white"
},
button:{
    
    width:300,
    height:40,
   top:100,
   left:30,
    borderRadius:10,
    // borderWidth:2,
    backgroundColor:"white",
     
},
texts:{
color:"#52AC3C",
fontSize:25,
left:30,
},

})
const Welcome=({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={styles.images}>
             <Image source={{uri:"https://images.pexels.com/photos/12842987/pexels-photo-12842987.jpeg?auto=compress&cs=tinysrgb&w=800"}} style={styles.image}/>
             </View>

             <Text style={styles.heading}>Fast Delivery at your Doorstep</Text> 
            <Text style={styles.text}> Have your favourite food delivered hot at your doorstep </Text>
             <TouchableOpacity
              style={styles.button}
             onPress={()=>{navigation.navigate("Home")}}
             >
                 <Text style={styles.texts}>Let's Explore</Text>  
            
             
            </TouchableOpacity>

        </View>
    )
}
export default Welcome