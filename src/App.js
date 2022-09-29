import "./App.css";
import Navbar from "./Components/Navbar";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Addcontact from "./Components/Addcontact";
import Contactlist from "./Components/Contactlist";
import Contactdetail from "./Components/Contactdetail";
import Contactedit from "./Components/Contactedit";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import PasswordReset from "./Components/PasswordReset";
import "bootstrap/dist/css/bootstrap.css";
import { UserAuthContextProvider } from "./Contexts/AuthContext";
import { ToggleModeContextProvider } from "./Contexts/ModeContext";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const [contactDetailsRecieved, setContactDetails] = useState(
    JSON.parse(localStorage.getItem("contactDetailsRecieved")) === null
      ? []
      : JSON.parse(localStorage.getItem("contactDetailsRecieved"))
  );

  //Need to update the searchedTxt which we're recieving from the App so everytime the component re-renders it will send the update state to props.
  const [searchedTxt, setSearchedText] = useState("");

  // UseEffect to update local storage each the state updates and component re-renders
  useEffect(() => {
    localStorage.setItem(
      "contactDetailsRecieved",
      JSON.stringify(contactDetailsRecieved)
    );
  }, [contactDetailsRecieved]);

  // Function to get the contactDetails from the child component and updating the state.
  const getContactList = (contactList) => {
    setContactDetails([...contactDetailsRecieved, contactList]);
  };

  // Function to delete the contacts and update the localstorage//state
  const idHandler = (id) => {
    let filteredContactDetails = contactDetailsRecieved.filter((contact) => {
      return contact.id !== id;
    });
    setContactDetails(filteredContactDetails);
  };

  // Function to get the text from the navbar & Search the contact
  const getText = (text) => {
    setSearchedText(text);
  };

  return (
    <>
      <UserAuthContextProvider>
        <ToggleModeContextProvider>
          <Navbar getText={getText} />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  {" "}
                    {" "}
                    <Contactlist
                      contactDetailsRecieved={contactDetailsRecieved}
                      idHandler={idHandler}
                      searchedTxt={searchedTxt}
                    />
                  {" "}
                </ProtectedRoute>
              }
            />
            <Route
              path="/addContact"
              element={
                <ProtectedRoute>
                  <Addcontact
                    getContactList={getContactList}
                    contactDetailsRecieved={contactDetailsRecieved}
                  />{" "}
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact/:id"
              element={
                <ProtectedRoute>
                  <Contactdetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact/edit/:id"
              element={
                <ProtectedRoute>
                  <Contactedit />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/passwordReset" element={<PasswordReset />} />
          </Routes>
        </ToggleModeContextProvider>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
