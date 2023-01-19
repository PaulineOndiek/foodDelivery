import { View, Image, Text} from "react-native"
import { Data } from "../Data"
const SingleItemScreen=({navigation,route})=>{
    const {id,Name,Price,Image}=route.params
    return(
        <View>
            <Image source= {{uri:Image}}/>
            <Text>{Name}</Text>
            <Text>{Price}</Text>
            <Text>{id}</Text>
           
            
        </View>
    )
}
export default SingleItemScreen