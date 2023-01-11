import React from 'react'
import { useState, useEffect } from 'react'
import Axios from "axios"

//fetch for js === axios in react
const Api = () => {
//   fetch("https://catfact.ninja/fact")
// .then((res=>res.json()))
// .then((data)=>{
//   console.log(data)
// })
  const fetchCatFact = () =>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
    setCatchFact(res.data.fact);
  });
};
  const [catchFact, setCatchFact] = useState("");
  
  useEffect (()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
    setCatchFact(res.data.fact);
  });
  },[]);
  
 
  return (
    <div>
      <button onClick={fetchCatFact}>Generate Cat fACT</button>
      <p>{catchFact}</p>
    </div>
  )
}

export default Api