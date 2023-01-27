import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useContext, useEffect, useState } from "react"
import { Context } from "../Context/StateArea";
const CartTrialScreen = () => {
    const { cartState } = useContext(Context)
    const [cart, setCart] = cartState;
    
    
    const increament = () => {
        setQuantity(quantinty += 1)
    }
 
    return (
        <View>
            {cart.length <= 0 ? (
                <View>
                    <Text>Nothing here</Text>
                </View>
            ) : (
                cart.map(item => {
                    return (
                        <View key={item.id}>
                            <View>
                                <Image source={{ uri: item.image }} style={styles.singleImage} />
                            </View>
                            <View style={{ color: "black" }}>
                                <Text style={{ color: "black" }}>{item.category}</Text>
                                <Text style={{ color: "black" }}>{item.name}</Text>
                                <Text style={{ color: "black" }}>Ksh.{item.price}</Text>
                            </View>
                            <View style={styles.mvi}>
                                <TouchableOpacity style={styles.button} onPress={() => decreament(item.id)}>
                                    <Text style={{ color: "black" }}>-</Text>
                                </TouchableOpacity>
                                <Text style={{ color: "black" }}>{quantinty}</Text>
                                <TouchableOpacity style={styles.button} onPress={increament}>
                                    <Text style={{ color: "black" }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })
            )}
            {/* <TouchableOpacity>
                <Text style={styles.button}>Pay</Text>
            </TouchableOpacity> */}
        </View>
    )
}
export default CartTrialScreen
white_check_mark
eyes
raised_hands
React
Reply


//
// //const [cart, setCart] = cartState;
//     const [modifiedCart, setModifiedCart] = useState([])
//     useEffect(() => {
//         setModifiedCart([...cart])
//     }, [cart])
//     const increament = (itemid) => {
//         const cartItem = modifiedCart.find(item => itemid === item.id)
//         setModifiedCart([...modifiedCart, cartItem])
//         // setQuantity(quantinty += 1)
//     }
//     const decreament = (itemId) => {
//         let modifiedCartCopy = [...modifiedCart]
//         let itemIndex;
//         modifiedCartCopy.some(item => {
//             if (item.id === itemId) {
//                 itemIndex=modifiedCartCopy.lastIndexOf(item)
//             }
//         })
//         modifiedCartCopy.splice(itemIndex, 1)
//         setModifiedCart(modifiedCartCopy)
//     }
//     return (
//         <View>
//             {cart.length <= 0 ? (
//                 <View>
//                     <Text>Nothing here</Text>
//                 </View>
//             ) : (
//                 cart.map(item => {
//                     let itemsArray = []
//                     const sameItem = modifiedCart.find(match => {
//                         if (match.id === item.id) {
//                             itemsArray.push(sameItem)
//                         }
//                     })
//</View>





