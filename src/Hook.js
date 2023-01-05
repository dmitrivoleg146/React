import React from 'react';
import { useEffect, useState } from 'react';

const Hook = () => {
//    const [increase, setIncrease] = useState(0);
//    const [text, setText] = useState("");
    //   const [showText, setShowText] = useState("green");
//    const increaseValue = ()=>{
//     setIncrease(increase +1);
//    }

//    const showText = (event) =>{
//     setText(event.target.value);
//    }
      const [count,setCount] = useState(0);
       
  return (
    <div>
        {/* {increase}<button onClick={increaseValue}>Click me</button>
        <input type="text" onChange={showText}/> {text} */}
        {/* <button onClick={()=>setShowText(!showText)}>Hide Me</button>
        {showText && <h1>My name Oleh</h1>} */}

        {/* <button onClick={()=>setShowText (showText === "green" ? "red" : "green")}>Hide Me</button>
        <h1 style={{color: showText}}>Hi my name Oleh</h1> */}

        <button onClick={()=>setCount(count +1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        <button onClick={()=>setCount(0)}>Set to Zero</button>

        {count}
    </div>
  )
}

export default Hook