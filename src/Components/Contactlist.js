import React, { useEffect, useState } from 'react'
import Contactcard from './Contactcard'

export default function Contactlist({contactDetailsRecieved,idHandler}) {
  const {contactList , setContactList} = useState([]); 
  return (
    <div>
      <h3>Contacts</h3>
      {contactDetailsRecieved.length<1?"No results Found":contactDetailsRecieved.map(contact => <Contactcard contact = {contact} key={contact.id} idHandler={idHandler}/>)}
    </div>
  )
} 
