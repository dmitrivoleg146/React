import React from 'react'
import {useState, useEffect} from "react";
import Axios from "axios"

const Api2 = () => {
  const [age,setAge] = useState(0);
  const[name, setName]= useState ("");
  const fetchData=()=>{
    Axios.get(`https://api.agify.io/?name=${name}`)
    .then((res)=> {
      setAge(res.data.age);
    });
  }
  return (
    <div>
      <input placeholder='Example:Perdo' 
      onChange={(event)=>{setName(event.target.value)}}/>
        <button onClick={fetchData}> Predict age </button>
        <h1>Predicted age: {age}</h1>
    </div>
  )
}

export default Api2