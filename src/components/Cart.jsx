import React from 'react'
import Item from './Item'
import { useCart } from '../context/CartContext'

function Cart() {
  const { products, total, formatMoney } = useCart()
  return (
    <div className='cart'>
      <h1 style={{ textAlign: "center" }}>
        {products.length > 0 ? `ยอดชำระเงินรวม : ${formatMoney(total)}` : 'ไม่มีสินค้าในตะกร้า'}
      </h1>
      {products.map((data) => (
        <Item {...data} key={data.id} />
      ))}
    </div>
  )
}

export default Cart