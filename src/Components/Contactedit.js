import React from 'react';
import { useLocation } from 'react-router';
import { useState } from 'react';

export default function Contactedit() {
    const [contactDetailsRecieved,setContactDetails] = useState(JSON.parse(localStorage.getItem('contactDetailsRecieved'))===null?[]:JSON.parse(localStorage.getItem('contactDetailsRecieved')));
    const location = useLocation();
    const {name,id,email,number} = location.state.contact;
    const {updatedName,setUpdatedName} = useState(name);
    const {updatedEmail,setUpdatedEmail} = useState(email);
    const {updatedNumber,setUpdatedNumber} = useState(number);

    const submitHandler = (e) => {
        e.preventDefault();
        contactDetailsRecieved.filter((contact) => {
            return contact.id === id;
        })
        console.log(updatedName);
    }
    
  return (
    <>
    <div className='container mt-4'>
    <h3>Edit Contact</h3>
    <form onSubmit={submitHandler}>
    <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setUpdatedName(e.target.value)} value={name}/>
    </div>
    <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Email Address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setUpdatedEmail(e.target.value)} value={updatedEmail}/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
        <label for="exampleInputPassword2" className="form-label">Number</label>
        <input type="text" className="form-control" id="exampleInputPassword2" onChange={(e) => setUpdatedNumber(e.target.value)} value={updatedNumber}/>
    </div>
    <button type="submit" className="btn btn-primary">Update</button>
    </form>
    </div>
</>
  )
}
