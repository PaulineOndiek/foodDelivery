import { useState,useMemo } from "react"
import { View, Text, FlatList } from "react-native"
import { Data } from "../Data"
import Item from "../components/Item"

const CategoryScreen=()=>{
    const [allData, setAllData]=useState(Data)
const [categorySelected, setCategorySelected]=useState("None")

const filteredData=useMemo(()=>{
    if (categorySelected==="None"){
      return allData
    }

    else{
    return allData.filter(item=>categorySelected===item.Category)

    }

},[allData, categorySelected])



const onPress=(category)=>{
    setCategorySelected(category)
}

    return(
        <View>
            <FlatList 
            data={filteredData}
            renderItem={Item}
            />
    
        </View>
    )
}
export default CategoryScreen