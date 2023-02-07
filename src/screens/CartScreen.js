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
  const [cart, setCart] = cartState
  const [modifiedCart, setModifiedCart] = useState([])
  const [remove, setRemove]=useState([])
  
  useEffect(() => {
    setModifiedCart([...cart])

  }, [cart])

  const onAdd = (item) => {
    const findId = modifiedCart.find(cartProduct => item === cartProduct.id)
    setModifiedCart([...modifiedCart, findId])

  }
  

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


    const removeItemFromBasket=(itemId)=>{
      let newCart=[...cart]
    let itemToBeDeleted =newCart.indexOf(itemId)
        newCart.splice(itemToBeDeleted, 1)
    setCart(newCart)  
  }

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
                  <TouchableOpacity  onPress={() => onSubtract(cartProduct.id)}>
                    <Text>Subtract</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=>removeItemFromBasket(cartProduct.id)}>
                  <Text>Remove</Text>
                  </TouchableOpacity>
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