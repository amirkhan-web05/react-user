import axios from 'axios'
import React from 'react'
import { TypeCartItems } from '../../components/CartItems'
import { CartList } from '../../components/CartList'

export const ShopPages:React.FC = () => {
  const [card, setCard] = React.useState<TypeCartItems[]>([])

  const fetchCard = async () => {
    try {
      await axios.get('http://localhost:3000/db.json').then(({data}) => {
        setCard(data.iPhone);
      })
    } catch(error) {
      console.error('Error:', error)
    }
  }

  React.useEffect(() => {
    fetchCard()
  }, [])
  

  return (
    <div className='container'>
      <div className="d-flex justify-content-between mt-5 align-items-center">
        <CartList card={card}/>
      </div>
    </div>
  )
}
