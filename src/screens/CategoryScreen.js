import { View, Text } from "react-native"
import { Data } from "../Data"

const CategoryScreen=()=>{
    return(
        <View>
            {
             Data.map(Category=>{
                return(
                    <View>
                        <Text>{Category.Image}</Text>
                        <Text>{Category.Name}</Text>
                        <Text>{Category.Price}</Text>
                        <Text>{Category.Category}</Text>
                    </View>
                )
             })   
            }
        </View>
    )
}
export default CategoryScreen