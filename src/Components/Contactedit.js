import React from 'react';
import { useLocation } from 'react-router';
import { useModeContext } from '../Contexts/ModeContext';

export default function Contactedit() {
    const location = useLocation();
    const {name,email,number} = location.state.contact;

    const {mode} = useModeContext();
    const submitHandler = (e) => {
        e.preventDefault();
    }
    
  return (
    <>
    <div className={`container mt-4 ${mode?'bg-secondary text-light':'bg-light text-dark'}`}>
    <h3>Edit Contact</h3>
    <form onSubmit={submitHandler}>
    <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleInputPassword1" value={name}/>
    </div>
    <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email Address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={email}/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
        <label for="exampleInputPassword2" className="form-label">Number</label>
        <input type="text" className="form-control" id="exampleInputPassword2"  value={number}/>
    </div>
    <button type="submit" className="btn btn-primary">Update</button>
    </form>
    </div>
</>
  )
}
