import React from 'react'
import Changeprofile from '../components/Changeprofile'
import { useContext } from 'react';
import { AppContext } from '../RoutesPractise';

const Menu = () => {
  const {username} = useContext(AppContext)
  // const {username} = useContext(AppContext);
  return (
    <div>
        Menu, user is {username} 
        {/* <Changeprofile setUsername={setUsername}/> */}
        <Changeprofile/>
    </div>
  );
};

export default Menu