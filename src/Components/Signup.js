import React, { useState } from 'react'
import { Alert, Button, Card , Container , Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { useUserAuth } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useModeContext } from '../Contexts/ModeContext';

export default function Signup() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const {signUp} = useUserAuth();
    const {mode} = useModeContext();
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        setError("")
        try {
            await signUp(email,password);
            navigate('/login')
        } catch (err) {
            setError(err.message);
        }
    }
  return (
    <>
    <Container className={`d-flex justify-content-center align-items-center mt-5 ${mode?'bg-dark':'bg-light'}`} style={{minHeight:"80vh"}}>
        <Card className={`p-4 ${mode?'bg-secondary text-light':'bg-light'}`} style={{maxWidth:"400px"}}>
            {error && <Alert variant='danger'>{error}</Alert>}
            <div className='text-center mb-3'><h2>Sign Up</h2></div>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Control type='email' className='mb-3' placeholder='Email Address' onChange={(e)=> setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control type='password' className='mb-3' placeholder='password' onChange={(e)=> setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <div className='d-grid gap-2'>
                     <Button variant='primary' type='submit'>
                        Sign Up
                     </Button>
                </div>
            </Form>
            <div className='p-4 box mt-3 text-center'>
                    Already Have an Account? <Link to='/login' className={`${mode?'text-white':'text-dark'}`}>Login</Link>
            </div>
        </Card>
    </Container>
    </>
  )
}
