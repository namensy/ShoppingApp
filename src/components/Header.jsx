import React from 'react'
import './Header.css'
import { useCart } from '../context/CartContext'

function Header() {
  const { amount } = useCart()
  return (
    <header>
        <p>Shopping Application</p>
        <p>สินค้าในตะกร้า : {amount}</p>
    </header>
  )
}

export default Header