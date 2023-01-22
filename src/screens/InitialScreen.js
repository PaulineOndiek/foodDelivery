import { View, Text, TouchableOpacity, Image, ScrollView} from "react-native"

import { Data } from "../Data"
const InitialScreen=({navigation})=>{
    
    return(
        <ScrollView>
        <View>
            {
        Data.map(orders=>{
            return(
                
                <View>
                   
                    <Text>{orders.Category}</Text>
                   <Image source={{uri:(orders.Image)}} style={{width: 60, height: 60}} />
                   <Text>{orders.Name}</Text>
                   <Text>{orders.Price}</Text>
                   
                </View>
            )
        })

            }
        </View>
        </ScrollView>
    )
}
export default InitialScreen