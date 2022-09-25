import './App.css';
import Navbar from './Components/Navbar';
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router , Link , Routes , Route} from 'react-router-dom';
import Addcontact from './Components/Addcontact';
import Contactlist from './Components/Contactlist';
import Contactdetail from './Components/Contactdetail';




function App() {
  const [contactDetailsRecieved,setContactDetails] = useState(JSON.parse(localStorage.getItem('contactDetailsRecieved'))===null?[]:JSON.parse(localStorage.getItem('contactDetailsRecieved')));

  // UseEffect to update local storage each the state updates and component re-renders
  useEffect(() => {
    localStorage.setItem('contactDetailsRecieved' , JSON.stringify(contactDetailsRecieved))
  },[contactDetailsRecieved]);

  // Function to get the contactDetails from the child component and updating the state.
  const getContactList = (contactList) => {
    setContactDetails([...contactDetailsRecieved,contactList]);
  }

  // Function to delete the contacts and update the localstorage//state
  const idHandler = (id) => {
   let filteredContactDetails = contactDetailsRecieved.filter((contact) => {
      return contact.id !== id;
    })
    setContactDetails(filteredContactDetails);
  }

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<div> <Contactlist contactDetailsRecieved = {contactDetailsRecieved} idHandler={idHandler}/></div>}/>
        <Route path='/addContact' element={<Addcontact getContactList = {getContactList} contactDetailsRecieved = {contactDetailsRecieved}/>}/>
        <Route path='/contact/:id' element={<Contactdetail/>}/>
      </Routes>
    </>
  );
}

export default App;
