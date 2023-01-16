import { View, Image} from "react-native"
const Welcome=()=>{
    return(
        <View>
            <Text>Welcome</Text>
            <Text>Have your favourite food delivered hot at your doorstep </Text>
            {/* <Image style={{width:100,height:100}} source={require('./../../assets/burger.avif')}/> */}
            <Button
            value={"Get Started"}/>
        </View>
    )
}
export default Welcome