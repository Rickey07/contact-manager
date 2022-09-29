import React, { useEffect, useState } from "react";
import Contactcard from "./Contactcard";
import { Container } from "react-bootstrap";
import { useModeContext } from "../Contexts/ModeContext";

export default function Contactlist({
  contactDetailsRecieved,
  idHandler,
  searchedTxt,
}) {
  const {mode} = useModeContext();
  let filteredContactDetails;
  const filterContacts = (searchedTxt) => {
    filteredContactDetails = contactDetailsRecieved.filter((contact) => {
      return contact.name.toLowerCase().includes(searchedTxt.toLowerCase());
    });
  };
  filterContacts(searchedTxt);
  return (
    <>
      <h3 className="text-center">Contacts</h3>
      <Container className={`d-flex flex-row justify-content-center gap-3 p-4 flex-wrap ${mode?'dark-parent':'light'}`}>
        {filteredContactDetails.length < 1
          ? `No Results Found`
          : filteredContactDetails.map((contact) => (
              <Contactcard
                contact={contact}
                key={contact.id}
                idHandler={idHandler}
              />
            ))}
      </Container>
    </>
  );
}
