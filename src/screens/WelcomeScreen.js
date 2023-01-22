import { View, Image, Button, Text, StyleSheet, YellowBox} from "react-native"
const styles=StyleSheet.create({
image:{
    width:500,
    height:500
},
container:{
    backgroundColor:"#CC9200",
}
})
const Welcome=({navigation})=>{
    return(
        <View style={styles.container}>
             <Image source={{uri:"https://images.pexels.com/photos/4676401/pexels-photo-4676401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}} style={styles.image}/>
             <Text>Welcome</Text> 
            <Text> Have your favourite food delivered hot at your doorstep </Text>
             <Button
            title="Get Started"
            onPress={()=>{navigation.navigate("Home")}} 
            />

        </View>
    )
}
export default Welcome