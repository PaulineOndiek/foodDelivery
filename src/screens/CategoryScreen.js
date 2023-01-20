import { useEffect } from "react"
import { View, Text, FlatList } from "react-native"


const CategoryScreen=({route})=>{
    const { items }=route.params
    useEffect(()=>{

        console.log(items)
    },[])

    return(
        <View>
            {items.map((jj)=>{
                return(
                    <View>
                  <Text>{ jj.Name}</Text> 
                  <Text>{ jj.Category}</Text>
                  </View>
                )
            })}
{/* 
            <FlatList 
            data={items}
            renderItem={(item)=>{
                return(

                    <Text>{item.Name}</Text>
                )
            }}
            /> */}
    
        </View>
    )
}
export default CategoryScreen