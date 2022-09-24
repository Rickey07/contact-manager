import './App.css';
import Navbar from './Components/Navbar';
import React from 'react';
import {BrowserRouter as Router , Link , Routes , Route} from 'react-router-dom';
import Addcontact from './Components/Addcontact';
import Contactlist from './Components/Contactlist';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<div> <Contactlist/> </div>}/>
        <Route path='/addContact' element={<Addcontact/>}/>
      </Routes>    
    </>
  );
}

export default App;
