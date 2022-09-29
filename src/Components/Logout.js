import React from 'react'
import { Button } from 'react-bootstrap'
import { useUserAuth } from '../Contexts/AuthContext'


export default function Logout() {
    const {logout ,user} =  useUserAuth();
    const handleLogout = async (e) => {
        try {
           await logout();
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div>
      <Button variant={user?"danger":"primary"}  onClick={handleLogout}>{user?"Logout":"Login"}</Button>
    </div>
  )
}
