import { View, Image, Button} from "react-native"
const Welcome=(navigation)=>{
    return(
        <View>
            <Text>Welcome</Text>
            <Text>Have your favourite food delivered hot at your doorstep </Text>
            {/* <Image style={{width:100,height:100}} source={require('./../../assets/burger.avif')}/> */}
            <Button
            title="Get Started"/>
            onPress={()=>{navigation.navigate("Home")}}
        </View>
    )
}
export default Welcome