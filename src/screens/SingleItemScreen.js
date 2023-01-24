import { View, Image, Text, TouchableOpacity, Button, StyleSheet} from "react-native"
import { greaterThan } from "react-native-reanimated"
import { Data } from "../Data"

const styles=StyleSheet.create({
    container:{
        height:"100%",
        // width:"80%",
        

     
    },

image:{width:300, 
    height:300},

    text:{
      fontSize:43,
      fontWeight:"bold",
    },
    price:{
        color:"#52AB3B",
        fontSize:20
    },
    button:{
        backgroundColor:"#52AC3C",
        width:300,
        height:40,
        borderRadius:5
    },
    texts:{
        color:"white",
        fontSize:30,

    }
})
const SingleItemScreen=({navigation,route})=>{
    const {id}=route.params
    return(
        <View style={styles.container}>
            <Image 
            style={styles.image} source={{uri:(id.Image)}} />
            <Text style={styles.text}>{id.Name}</Text>
            <Text style={styles.price}>Kshs. {id.Price}</Text>  
            <Text>{id.aboutFood}</Text>  
            
                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.texts} >Shop Now</Text>
                </TouchableOpacity>
                
                
                
    
                
        </View>
    )
}
export default SingleItemScreen