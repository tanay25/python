import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Navbar from './Navbar'
import Error from './Components/Error'
export default function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/profile/:name/:salary" element={<Profile/>}></Route>
                <Route path="*" element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}
