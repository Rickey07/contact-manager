import React from 'react'
import { Button } from 'react-bootstrap'
import { useUserAuth } from '../Contexts/AuthContext'


export default function Logout() {
    const {logout} =  useUserAuth();
    const handleLogout = async (e) => {
        try {
           await logout();
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div>
      <Button variant="danger" onClick={handleLogout}>Logout</Button>
    </div>
  )
}
