import React from 'react'
import { useContext } from 'react'
import {AppContext} from "../RoutesPractise"

const Home = () => {
  const {username} = useContext(AppContext);
  return (
    <div>
        <h1>This is a home page and the user is {username}</h1>
    </div>
  )
}

export default Home