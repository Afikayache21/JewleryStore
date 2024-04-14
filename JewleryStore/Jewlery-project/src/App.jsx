import { useState } from 'react'
import Navbar from './Parts/Navbar.jsx' // Import the Navbar component
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './Parts/Footer.jsx'
import Home from './Parts/Home.jsx'
import Shop from './Parts/Shop.jsx'
import Cart from './Parts/Cart.jsx'
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
