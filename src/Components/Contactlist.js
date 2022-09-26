import React, { useEffect, useState } from 'react'
import Contactcard from './Contactcard'



export default function Contactlist({contactDetailsRecieved,idHandler,searchedTxt}) {
  let filteredContactDetails;
  const filterContacts = (searchedTxt) => {
    filteredContactDetails = contactDetailsRecieved.filter((contact) => {
      return contact.name.includes(searchedTxt);
    })
    console.log(filteredContactDetails);
    console.log(searchedTxt);
  }
  filterContacts(searchedTxt);
  return (
    <div className='d-flex flex-column justify-content-center'>
      <h3>Contacts</h3>
      {filteredContactDetails.length<1?"No results Found":filteredContactDetails.map(contact => <Contactcard contact = {contact} key={contact.id} idHandler={idHandler}/>)}
    </div>
  )
} 
