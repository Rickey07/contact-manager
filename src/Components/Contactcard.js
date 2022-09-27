import React from 'react'
import { Container , Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Contactcard({contact,idHandler}) {
  const deleteUserId = () => {
    const {id} = contact;
    idHandler(id);
  }
  return (
    <Card className="d-flex flex-row justify-content-space-between p-3 contact-card" style={{maxWidth:"300px" , minWidth:"150px"}}>
      <div className='d-flex flex-column'>
        <i class="fa-solid fa-user user-circle"></i>
       <Link to={`/contact/${contact.id}`} state={{contact:contact}} className='user-name'> <p>{contact.name}</p> </Link> 
        <p>{contact.email}</p>
      </div>
      <div className='d-flex flex-row gap-2'>
       <Link to={`/contact/edit/:${contact.id}`} state={{contact:contact}}> <i className="fa-solid fa-user-pen"></i> </Link>
       <Link> <i className="fa-solid fa-trash" onClick={deleteUserId}></i> </Link>
      </div>
    </Card>
  )
}
