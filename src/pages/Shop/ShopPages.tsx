import React from 'react'
import { TypeCartItems } from '../../components/CartItems'
import { CartList } from '../../components/CartList'

const iPhone:TypeCartItems[] = [
    {
      id:1,
      name:"Apple / Смартфон iPhone 13 Pro Max 128GB/6.1",
      price:77710
    },
    {
      id:2,
      name:"Apple / Смартфон iPhone 13 Pro Max 128GB/6.1",
      price:77710
    },
    {
      id:3,
      name:"Apple / Смартфон iPhone 13 Pro Max 128GB/6.1",
      price:77710
    }
  ]


export const ShopPages:React.FC = () => {
  return (
    <div className='container'>
      <div className="d-flex justify-content-between mt-5 mb-5 align-items-center">
        <CartList card={iPhone}/>
      </div>
    </div>
  )
}
