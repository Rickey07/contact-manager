import React from 'react'
import { Navigate } from 'react-router'
import { useUserAuth } from '../Contexts/AuthContext';

export default function ProtectedRoute({children}) {
    let {user} = useUserAuth();
    if (!user) {
       return <Navigate to='/login' />
    }
    return children;
}
