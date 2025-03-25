import { useState } from "react";

import styled from "styled-components";

import ContactsList from "./ContactsList";

import { inputs } from "../constants/input";

const Button = styled.button`
  width: 90%;
  margin: 10px 30px;
`;

const Alert = styled.div`
  margin: 8px 0;
`;

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter valid data");
      return;
    }
    setAlert("");
    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };
  return (
    <>
      <div className="bg-white border border-gray-300">
        {inputs.map((input) => (
          <input
            key={input.name}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            className="border border-gray-300 rounded-md px-3 w-72"
            onChange={changeHandler}
          />
        ))}

        <Button
          onClick={addHandler}
          className="bg-blue-700 text-white rounded-md py-2"
        >
          Add Contact
        </Button>
      </div>
      <Alert className="text-red-600 bg-red-200 p-3 m-3 text-center">
        {" "}
        {alert}{" "}
      </Alert>
      <ContactsList contacts={contacts} />
    </>
  );
}

export default Contact;
