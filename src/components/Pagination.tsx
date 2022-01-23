import React from 'react'

type TypePages = {
  totalPosts:number,
  postsPerPage:number,
  currentButton:number
  paginate: (number:number) => void
}

export const Pagination:React.FC<TypePages> = ({postsPerPage, totalPosts, paginate, currentButton}) => {
  const pageNumbers:number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }  

  return (
    <>
      {pageNumbers.map((number) => (
        <span 
          key={number} 
          onClick={() => paginate(number)} 
          className={number === currentButton ? 'me-2 ms-2 number bg-primary' : 'me-2 ms-2 number bg-light text-dark'}
        >
          {number}
        </span>
      ))}
    </>
  )
}
