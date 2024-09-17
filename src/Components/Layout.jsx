import React from "react";
import Header from "./Header";
import Action from "./Action";
import { useSelector } from "react-redux";
import Counter from "./Counter";
import Display_Message from "./Display_Message"

function Layout(){
    const outPut = useSelector((store)=>store.display)
   

    return(
        <div className=" w-fit mx-auto p-10 rounded-sm shadow-lg border border-black mt-[100px] ">
            <Header/>
            { outPut ? <Counter/> : <Display_Message/>} 
            {/* <Counter/> */}
            <Action/>
            {console.log(outPut)}
        </div>
    )
}
export default Layout;