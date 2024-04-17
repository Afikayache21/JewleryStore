import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './Parts/CartContext.jsx'
import { ShopContextProvider } from './Parts/ShopContext.jsx'
import { AdminContextProvider } from './Parts/AdminContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <CartContextProvider>
        <AdminContextProvider>
          <App />
        </AdminContextProvider>
      </CartContextProvider>
    </ShopContextProvider>
  </BrowserRouter>


)
