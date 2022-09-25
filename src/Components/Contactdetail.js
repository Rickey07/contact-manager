import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

export default function Contactdetail() {
  const location = useLocation();
  const {state} = location;
  console.log(state);
  return (
    <>
    <div className="card" style={{width:"18rem"}}>
      <img src="..." className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{state.contact.name}</h5>
        <p className="card-text">{state.contact.email}</p>
        <p className="card-text">{state.contact.number}</p>
        <Link to="/" className="btn btn-primary">Go Back</Link>
      </div>
    </div>
    </>
  )
}
