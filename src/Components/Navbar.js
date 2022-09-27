import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../Contexts/AuthContext';
import Logout from './Logout';

export default function Navbar({getText}) {

  const [searchText,setSearchText] = useState("");

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      // await logout();
    } catch (err) {
      console.log(err.message);
    }
    
  }

  //ChangeHandler for setting the text
  const changeHandler = (e) => {
    setSearchText(e.target.value)
  }
  // Send back the searchedTxt to App component
  getText(searchText);

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" href="#" to="/">Contact Manager</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" href="#" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="#" to="/addcontact">Add Contact</Link>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search Contact by Name" onChange={changeHandler} aria-label="Search" value={searchText}/>
            </form>
            </div>
             <Link to='/login' className='mr-4'>
              <Logout/>
              </Link>
        </div>
        </nav>
    </>
  )
}
