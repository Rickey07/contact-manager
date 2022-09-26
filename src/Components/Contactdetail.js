import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

const imageUrl = `https://api.lorem.space/image/face?w=150&h=150`;

export default function Contactdetail() {
  const location = useLocation();
  const {state} = location;
  return (
    <>
    <div className="card mt-3 m-auto" style={{width:"18rem"}}>
      <img src={imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Name:- {state.contact.name}</h5>
        <p className="card-text">Email Address:- {state.contact.email}</p>
        <p className="card-text">Contact Number:- {state.contact.number}</p>
        <Link to="/" className="btn btn-primary">Go Back</Link>
      </div>
    </div>
    </>
  )
}
