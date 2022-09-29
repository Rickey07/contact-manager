import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useModeContext } from "../Contexts/ModeContext";
export default function Contactcard({ contact, idHandler }) {
  const {mode} = useModeContext();
  const deleteUserId = () => {
    const { id } = contact;
    idHandler(id);
  };
  return (
    <Card
      className={`d-flex flex-row justify-content-space-between contact-card p-3 ${mode?'bg-secondary text-light':'light'}`} style={{maxWidth:"300px",minWidth:"300px"}}
    >
      <div className="d-flex flex-column">
        <i class="fa-solid fa-user user-circle"></i>
        <Link
          to={`/contact/${contact.id}`}
          state={{ contact: contact }}
          className={`${mode?'text-light':'text-dark'}`}
        >
          <p>{contact.name}</p>
        </Link>
        <p>{contact.email}</p>
      </div>
      <div className="d-flex flex-row gap-2">
        <Link to={`/contact/edit/:${contact.id}`} state={{ contact: contact }}>
          <i className={`fa-solid fa-user-pen ${mode?'text-light':'light'}`}></i>
        </Link>
        <Link>
          <i className={`fa-solid fa-trash ${mode?'text-light':'light'}`} onClick={deleteUserId}></i>
        </Link>
      </div>
    </Card>
  );
}
