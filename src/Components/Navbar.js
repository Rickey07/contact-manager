import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Logout from "./Logout";
import { useModeContext } from "../Contexts/ModeContext";

export default function Navbar({ getText }) {
  const [searchText, setSearchText] = useState("");
  const { mode, setMode } = useModeContext();

  //ChangeHandler for setting the text
  const changeHandler = (e) => {
    setSearchText(e.target.value);
  };
  // Send back the searchedTxt to App component
  getText(searchText);
  
  // Function to change the app mode:- 
  const setModeFunc = () => {
    return !mode?setMode(true):setMode(false);
  }
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${mode ? "bg-dark" : "bg-light"}`}
      >
        <div className="container-fluid">
          <Link className={`navbar-brand ${mode?"text-light":'text-dark'}`} href="#" to="/">
            Contact Manager
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link active ${mode?"text-light":'text-dark'}`}
                  aria-current="page"
                  href="#"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link active ${mode?"text-light":'text-dark'}`} href="#" to="/addcontact">
                  Add Contact
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search Contact by Name"
                onChange={changeHandler}
                aria-label="Search"
                value={searchText}
              />
            </form>
            <Link to="/login" className="mr-4">
            <Logout />
          </Link>
          <div>
            <Form className="d-flex gap-2">
            <span className={`${mode?'text-light':'text-dark'}`}>
              {mode?'Light Mode':"Dark Mode"}
            </span>
              <Form.Check type="switch" onClick={setModeFunc}></Form.Check>
            </Form>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
}
