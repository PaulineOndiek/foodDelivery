import { useContext, useState, useParams, useEffect } from "react"
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { Context } from "../../Context/States"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction: "row",
  },

  cartContainer: {
    flex: 1,
  },

  image: {
    width: 100,
    height: 100,

  },

})


const CartScreen = () => {
  const { cartState } = useContext(Context)
  const [cart, setcart] = cartState
  const [modifiedCart, setModifiedCart] = useState([])

  useEffect(() => {
    setModifiedCart([...cart])
    
  }, [cart])

  const onSubtract = (itemid) => {

    let modifiedCartCopy = [...modifiedCart]
    let itemIndex;
    modifiedCartCopy.some(cartProduct => {
      if (cartProduct.id === itemid) {
        itemIndex = modifiedCartCopy.lastIndexOf(cartProduct)
      }
    })
    modifiedCartCopy.splice(itemIndex, 1)
    setModifiedCart(modifiedCartCopy)



  }




  const onAdd = (item) => {
    const findId = modifiedCart.find(cartProduct => item === cartProduct.id)
    setModifiedCart([...modifiedCart, findId])

  }




  const updateProductPrice = (quantity, price) => {
    let result = quantity * price


  }

  const counter = () => {

  }

  // const {item}=props
  // const {quantity}=quantity


  return (
    <>
      {cart.length <= 0 ? <Text>Your Cart is empty! </Text>
        : cart.map((cartProduct) => {
          let array = []
          modifiedCart.find(sameArray => {
            if (sameArray.id === cartProduct.id) {
              array.push(sameArray)
            }
          })
          const arrayLength = array.length
          const price = arrayLength * cartProduct.Price

          return (
            <ScrollView>
              <View style={styles.container} key={cartProduct.id}>
                <View style={styles.cartContainer}>
                  <Image style={styles.image} source={{ uri: (cartProduct.Image) }} />
                  <Text>{cartProduct.Name}</Text>
                  <Text>{price}</Text>
                  <Text>{cartProduct.aboutFood}</Text>
                  <TouchableOpacity onPress={() => onAdd(cartProduct.id)}>
                    <Text>Add</Text>
                  </TouchableOpacity>
                  <Text>{arrayLength}</Text>
                  <TouchableOpacity onPress={() => onSubtract(cartProduct.id)}>
                    <Text>Subtract</Text>
                  </TouchableOpacity>
                  <Text></Text>
                </View>
              </View>
              <Text>Total Quantity</Text>
              <Text>Total Price</Text>
            </ScrollView>
          )
        })}

    </>
  )
}



export default CartScreen