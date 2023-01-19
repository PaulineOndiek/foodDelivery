import { createContext, useState } from "react"
export const Context=createContext()


const States=({children})=>{
const [fullData,setFullData]=useState("null")
    return(
        <Context.Provider value={{recipe:[fullData, setFullData]}}>
            {children}
        </Context.Provider>
    )
}
export default States