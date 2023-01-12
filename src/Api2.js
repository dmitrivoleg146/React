import React from 'react'
import {useState, useEffect} from "react";
import Axios from "axios"

const Api2 = () => {
  // const [age,setAge] = useState(0);
  // const[name, setName]= useState ("");
  // const fetchData=()=>{
  //   Axios.get(`https://api.agify.io/?name=${name}`)
  //   .then((res)=> {
  //     setAge(res.data.age);
  //   });
  // }
  const [age,setAge]= useState(null);
  const [name,setName]= useState("");
  const fetchData=()=>{
    Axios.get(`https://api.agify.io/?name=${name}`)
    .then((res)=>setAge(res.data));
  }
  return (
    <div>
      <input onChange={(event)=>setName(event.target.value)}/>
      <button onClick={fetchData}>Predict Age</button>
      <h1>Name: {age?.name}</h1> 
      {/* // If is null, in our case age=0 in useState */}
      <h1>Predicted age: {age?.age}</h1>
      <h1>Count: {age?.count}</h1>
      {/* <input placeholder='Example:Perdo' 
      onChange={(event)=>{setName(event.target.value)}}/>
        <button onClick={fetchData}> Predict age </button>
        <h1>Predicted age: {age}</h1> */}
    </div>
  )
}

export default Api2