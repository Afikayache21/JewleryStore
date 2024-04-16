import { useState } from 'react'
import Navbar from './Parts/Navbar.jsx' // Import the Navbar component
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './Parts/Footer.jsx'
import Home from './Parts/Home.jsx'
import Shop from './Parts/Shop.jsx'
import Cart from './Parts/Cart.jsx'
import LogIn from './Parts/LogIn.jsx'
import AdminPage from './Parts/AdminPage.jsx'
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path='/Cart' element={<Cart/>}/>
        <Route path="/LogIn" element={<LogIn />} />
        <Route path='/AdminPage' element={<AdminPage/>}/>
        <Route path="*" element={<h1>not found 404</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
