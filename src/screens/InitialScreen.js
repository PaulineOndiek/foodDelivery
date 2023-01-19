import { View, Text, TouchableOpacity, Image} from "react-native"

import { Data } from "../Data"
const InitialScreen=({navigation})=>{
    
    return(
        <View>
            {
        Data.map(orders=>{
            return(
                <View>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Single Item" , {id:orders.id, Name:orders.Name, Price:orders.Price,Image:orders.Image})}}> 
                    <Text>{orders.Category}</Text>
                   <Image source={{uri:(orders.Image)}} style={{width: 60, height: 60}} />
                   <Text>{orders.Name}</Text>
                   <Text>{orders.Price}</Text>
                   </TouchableOpacity>
                </View>
            )
        })

            }
        </View>
    )
}
export default InitialScreen