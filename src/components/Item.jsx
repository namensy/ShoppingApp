import React from 'react'
import { useCart } from '../context/CartContext'
import './Item.css'

function Item({ id, name, price, image, quantity }) {
  const { formatMoney, removeItem, addQuantity, subTractQuantity } = useCart()
  return (
    <div className='card'>
      <img src={image} alt={id} />
      <div className='product'>
        <p className='name'>ชื่อสินค้า : {name}</p>
        <p className='price'>ราคา : {formatMoney(price)} บาท</p>
      </div>
      <div className='quantity'>
        <button onClick={() => addQuantity(id)}>+</button>
        <input type="text" value={quantity} disabled />
        <button onClick={() => subTractQuantity(id)}>-</button>
      </div>
      <div className='total-price'>{formatMoney(quantity * price)}</div>
      <button onClick={() => removeItem(id)}>ลบสินค้า</button>
    </div>
  )
}

export default Item