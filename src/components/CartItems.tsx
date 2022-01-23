import React from 'react'
import heartImages from "../assets/images/red-heart-icon-dark-border-red-heart-icon-cushion-transparent-png-1586153.png"
import starReviews  from "../assets/images/360_F_278803764_OfOLMqAm7pqVSJ0EuV8YuC0nLWaBtRw7.jpg"
import iPhoneImages from '../assets/images/135982_p_20.png'

export type TypeCartItems = {
  id:number,
  name:string,
  price:number
}

export const CartItems:React.FC<TypeCartItems> = ({id, name, price}) => {
  return (
    <div className='card'>
      <div className="card-items__images d-flex justify-content-start">
        <img src={iPhoneImages} alt="" className="card__inner mt-3" />
      </div>
      <div className="card-items__body card-body">
        <div>
          <div className='d-flex align-items-center'>
            <h5 className="fs-4 card-price me-3">{price.toLocaleString("en-de")} ₽</h5>
            <strong className='text-secondary card-subtitle'>99 990 ₽</strong>
          </div>
          <span className='card-price__item'>85 251 ₽</span>
        </div>
        <p className="text-secondary card-title">{name}</p>
        <div className='d-flex align-items-center justify-content-start reviews'>
          <img className='reviews__images' src={starReviews} alt="" />
          <span className='text-secondary'>87</span>
        </div>
        <div className='installment text-white'>
          Рассрочка 0-0-6
        </div>
        <div>
          <button className="btn__cart">В корзину</button>
          <img className='heart ms-3' src={heartImages} alt="" />
        </div>
      </div>
    </div>
  )
}
