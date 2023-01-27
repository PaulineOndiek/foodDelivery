import { View, Image, Text, TouchableOpacity, Button, StyleSheet} from "react-native"
import { greaterThan } from "react-native-reanimated"
import { Data } from "../Data"
import { Context } from "../../Context/States"
import { useContext } from "react"

const styles=StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        // justifyContent:"center",
        marginTop:12,
        marginLeft:50
        

     
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
    const {cartState}=useContext(Context)
    const [cart, setCart]=cartState
    const addToCart=(item)=>{
     setCart([...cart,item])
     console.log(cart)
    }
    return(
        <View style={styles.container}>
            <Image 
            style={styles.image} source={{uri:(id.Image)}} />
            <Text style={styles.text}>{id.Name}</Text>
            <Text style={styles.price}> {id.Price}</Text>  
            <Text>{id.aboutFood}</Text>  
            
                <TouchableOpacity style={styles.button} onPress={()=>{addToCart(id)}}> 
                    <Text style={styles.texts} >Shop Now</Text>
                </TouchableOpacity>
                
                
                
    
                
        </View>
    )
}
export default SingleItemScreen