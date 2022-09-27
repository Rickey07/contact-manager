import React, { useState } from 'react'
import {Container , Button , Link , Card , Form} from 'react-bootstrap' 
import { useUserAuth } from '../Contexts/AuthContext';

export default function PasswordReset () {
    const [email , setEmail] = useState("");
    const {forgotPassword,confirmPasswordReset} = useUserAuth()
    const handlePasswordReset = async (e) => {
        e.preventDefault()
        try {
           const response = await forgotPassword(email);
            console.log(response);
            alert("Password Reset Link sent")
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <>
        <Container className='d-flex justify-content-center align-items-center' style={{maxWidth:"400px" , minHeight:"100vh"}}>
            <Card className='p-4'>
                <h2>Reset Password</h2>
                <Form>
                    <Form.Group>
                        <Form.Control type='email' className='mb-3' placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} value={email}>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <hr />
                <Button variant='success' onClick={handlePasswordReset}>Reset Password</Button>
            </Card>
         </Container>
    </>
  )
}
