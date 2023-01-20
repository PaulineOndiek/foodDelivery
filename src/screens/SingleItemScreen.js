import { View, Image, Text, TouchableOpacity, Button} from "react-native"
import { Data } from "../Data"
const SingleItemScreen=({navigation,route})=>{
    const {id}=route.params
    return(
        <View>
            {/* <Text>{Data && Data.Name}</Text> */}
            <Image source={{uri:(id.Image)}} style={{width:100, height:100}}/>
            <Text>{id.Name}</Text>
            <Text>{id.Price}</Text>    
            
                <Button
                title="Shop Now"
                

                />
    
                
        </View>
    )
}
export default SingleItemScreen