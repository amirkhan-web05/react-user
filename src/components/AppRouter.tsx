import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequirePath } from '../hoc/RequirePath'
import { authRoutes, publicRoutes } from '../routes'

export const AppRouter:React.FC = () => {
  return (
    <Routes>
     {authRoutes.map(({path, Element}) => (
       <Route key={path} path={path} element={
         <RequirePath>
           <Element/>
         </RequirePath>
       }/>
     ))}  
     
     {publicRoutes.map(({path, Element}) => (
      <Route key={path} path={path} element={<Element/>}/>
     ))}
    </Routes>
  )
}
