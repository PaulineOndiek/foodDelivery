import { useEffect } from "react"
import { View, Text, FlatList, TouchableOpacity} from "react-native"


const CategoryScreen=({navigation,route})=>{
    const { items }=route.params

    return(
        <View>
            {items.map((filtered)=>{
                return(
                    <View>
                         <TouchableOpacity onPress={()=>{navigation.navigate("Single Item", {id:filtered})}}> 
                         <Text>{ filtered.Category}</Text>
                        <Text>{ filtered.Name}</Text> 
                       <Text>{filtered.Price}</Text>
                       </TouchableOpacity>
                    </View>
                )
            })}
    
        </View>
    )
}
export default CategoryScreen