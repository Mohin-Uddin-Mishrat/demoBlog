import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export const ProtectedRout = ({children}) => {
  const location = useLocation()
  if(localStorage.getItem("Authentication")) {
    return children
  }else{
    return <Navigate to='/login'  state={{ from: location }} replace></Navigate>
  }
}
