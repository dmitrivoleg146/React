import React, { useContext } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Content from './pages/Content'
import {Navbar} from './pages/Navbar'
import { useState, createContext} from 'react'


export const AppContext = createContext();
// export const AppContext = createContext();

const RoutesPractise = () => {
  const [username,setUsername] = useState("");

  //Context API help us give an access to components on depper levels, with using "props" directly

  return (
    <div>
      <AppContext.Provider value={{username, setUsername}}>
          {/* Provide the data inside of it */}
        <Router>
          <Navbar/>
          {/* this is what we gonna change */}
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/content' element={<Content/>}/>
            <Route path="*" element={<h1>404</h1>}/>
              {/* <Route path='/' element={<Home/>}/>
              <Route path='/menu' element={<Menu/>}/>
              <Route path='/content' element={<Content/>}/>
              <Route path='*' element={<h1>Page Not Found</h1>}/> */}
          </Routes>
        </Router>
       </AppContext.Provider>
    </div>
  )
}

export default RoutesPractise