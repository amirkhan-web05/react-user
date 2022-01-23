import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const RequirePath:React.FC = ({children}):JSX.Element => {
  const location = useLocation()
  const auth = useTypedSelector(({auth}) => auth.auth)
  
  if (!auth) {
    return <Navigate to={'/login'} state={{from:location}}/>
  }

  return (
    <>{children}</>
  );
};
