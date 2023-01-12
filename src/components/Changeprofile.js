import React from 'react'
import { useState, useContext } from 'react'
import { AppContext } from '../RoutesPractise';

const Changeprofile = () => {
    const {setUsername} = useContext(AppContext);
    // const {setUsername} = useContext(AppContext);
    const[newUsername,setNewUsername] = useState("");
  return (
    <div>
        <input onChange={(event)=>{setNewUsername(event.target.value)}}/>
        <button onClick={setUsername(newUsername)}>Update</button>
    </div>
  )
}

export default Changeprofile