import React from 'react'
import { useState, useEffect } from 'react';
import Axios from "axios";

const Excuse = () => {
    const [generateExcuse,setGeneratedExcuse] = useState("");
    const fetchData = (excuse) =>{
        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`)
        .then((res)=>{setGeneratedExcuse(res.data[0].excuse)}) // data is not an json - it is an array
    }
  return (
    <div>
        <h1>Generate an excuse</h1>
        <buton onClick={()=>fetchData("party")}>Name</buton>
        <buton onClick={()=>fetchData("family")}>Age</buton>
        <buton onClick={()=>fetchData("office")}>Count</buton>
        <p>{generateExcuse}</p>
    </div>
  )
}

export default Excuse