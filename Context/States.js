import { createContext, useState } from "react"
export const Context=createContext()


const States=({children})=>{
const [fullData,setFullData]=useState("null")
const [cart,setCart]=useState([])
    return(
        <Context.Provider value={{recipe:[fullData, setFullData],cartState:[cart,setCart]}}>
            {children}
        </Context.Provider>
    )
}
export default States