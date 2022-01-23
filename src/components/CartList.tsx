import React from 'react'
import { CartItems, TypeCartItems } from './CartItems'

type TypeCard = {
  card:TypeCartItems[]
}

export const CartList:React.FC<TypeCard> = React.memo(({card}) => {
  return (
    <>
      {card.map(item => (
        <CartItems key={item.id} {...item} />
      ))}
    </>
  )
})
