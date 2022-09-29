import React, { useState } from "react";
import { useNavigate } from "react-router";
import { uuid } from "uuidv4";
import { useModeContext } from "../Contexts/ModeContext";
import Navbar from "./Navbar";

export default function Addcontact({ getContactList, contactDetailsRecieved }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [contactDetails, setContactDetails] = useState({});
  const {mode} = useModeContext();

  const submitHandler = (e) => {
    e.preventDefault();
    // Function to check if the user Already exists in the database.
    const checkUserExistence = (users) => {
      let boolean;
      users.forEach((user) => {
        if (user.email === email || user.name === name) {
          console.log("here");
          boolean = true;
        } else {
          boolean = false;
        }
      });
      return boolean;
    };

    // Required Form Validation before submission & creation of new contact
    if (name === "" || email === "" || number === "") {
      alert("All fields are required");
      return false;
    } else if (number.length < 10 || number.length > 10) {
      alert("Number Length Should be equal to 10");
      return false;
    } else if (checkUserExistence(contactDetailsRecieved)) {
      alert("OOPS!Contact with this  email or Number Already Exists!");
      return false;
    } else {
      setContactDetails({
        name: name,
        email: email,
        number: number,
        id: uuid(),
      });
      getContactList({ name: name, email: email, number: number, id: uuid() });
    }
    navigate("/");
  };
  return (
    <>
      <div className={`container mt-4 ${mode?'bg-secondary text-light':'bg-light'}`}>
        <h3 className="text-center">Add Contact</h3>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="Form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword2" className="form-label">
              Number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword2"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
