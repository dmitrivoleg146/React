import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Content from './pages/Content'
import {Navbar} from './pages/Navbar'

const RoutesPractise = () => {
  return (
    <div>
       <Router>
        <Navbar/>
        {/* this is what we gonna change */}
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/content' element={<Content/>}/>
          <Route path="*" element={<h1>404</h1>}/>
            {/* <Route path='/' element={<Home/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/content' element={<Content/>}/>
            <Route path='*' element={<h1>Page Not Found</h1>}/> */}
         </Routes>
       </Router>
    </div>
  )
}

export default RoutesPractise