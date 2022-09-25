import React from 'react'
import { Link } from 'react-router-dom'
export default function Contactcard({contact,idHandler}) {
  const deleteUserId = () => {
    const {id} = contact;
    idHandler(id)
  }
  return (
    <div className='container-fluid d-flex flex-row justify-space-between'>
      <div className='d-flex flex-column'>
          <i class="fa-solid fa-user"></i>
       <Link to={`/contact/${contact.id}`} state={{contact:contact}}> <p>{contact.name}</p> </Link> 
        <p>{contact.email}</p>
      </div>
      <div className='d-flex flex-row gap-2'>
       <Link to={`/contact/edit/:${contact.id}`}> <i className="fa-solid fa-user-pen"></i> </Link>
       <Link> <i className="fa-solid fa-trash" onClick={deleteUserId}></i> </Link>
      </div>
    </div>
  )
}
