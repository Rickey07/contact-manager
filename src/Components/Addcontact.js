import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import {uuid} from 'uuidv4'



export default function Addcontact( {getContactList , contactDetailsRecieved}) {
  const navigate = useNavigate()
  
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [number,setNumber] = useState("");
  const [contactDetails,setContactDetails] = useState({})


  const checkUserExistence = (users) => {
    users.forEach((user) => {
      if (user.email === email || user.number === number) {
        console.log("User Already exists");
        return false
      } else {
        console.log("You can go through it")
      }
    })
  } 
  
  const submitHandler = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || number === '') {
      alert('All fields are required');
      return false;
    } else if (number.length < 10 || number.length > 10) {
      alert('Number Length Should be equal to 10')
      return false;
    } else {
      if (checkUserExistence(contactDetailsRecieved)===true) {
        setContactDetails({name:name,email:email,number:number,id:uuid()})
        getContactList({name:name,email:email,number:number,id:uuid()});
        return true;
      } else {
        console.log("yes it is here");
        return false;
      }
    }
    navigate('/')
  }
  return (
    <>
    <div className='container mt-4'>
        <h3>Add Contact</h3>
        <form onSubmit={submitHandler}>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setName(e.target.value)} value={name}/>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword2" className="form-label">Number</label>
            <input type="text" className="form-control" id="exampleInputPassword2" onChange={(e) => setNumber(e.target.value)} value={number}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
     </div>
</>
  )
}
