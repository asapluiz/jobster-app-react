import {ReactNode, } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export interface RootStateType{
  user:{
    isLoading:boolean
    user:{
      email:string
      lastName:string
      location:string
      name:string
      token:string
    }
  }
}

export default function ProtectedRoute ({ children }:{children:ReactNode}){
    const user = useSelector((state:RootStateType) => state.user.user); 

    return user ? <>{children}</> : <Navigate to="/register" />;
};