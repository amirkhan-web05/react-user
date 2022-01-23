import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar:React.FC = () => {
  return (
    <nav className='nav d-flex justify-content-start p-3 fs-4'>
      <NavLink className='text-white me-3 nav__link text-decoration-none' to='/'>
        Главная страница
      </NavLink>
      <NavLink className='text-white me-3 nav__link text-decoration-none' to='/login'>
        Логин
      </NavLink>
      <NavLink className='text-white nav__link text-decoration-none' to='/shop'>
        Магазин
      </NavLink>
    </nav>
  )
}
