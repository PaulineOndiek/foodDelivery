import React from "react";
import { Text, View } from "react-native";

const Item=(props)=>{
    return(
    <View>
        <Text>{props.item.Name}</Text>
        <Text>{props.item.Price}</Text>
        <Text>{props.item.Category}</Text>
        

    </View>
    )
}

export default Item