import React from 'react'
import { useState,useEffect } from 'react'

const Text = () => {
    const [text,setText] = useState("");

    useEffect(()=>{
       console.log("Mounted Stage");
       return ()=>{
        console.log("Unmounted Stage");
       }
    },[])// to make it call just one time
  return (
    <div>
        <input onChange={(event)=>{
           setText(event.target.value);
        }}/>
        <h1>{text}</h1>
    </div>
  )
}

export default Text