import { useState } from "react";

import styled from "styled-components";

import ContactsList from "./ContactsList";

import { inputs } from "../constants/input";

import styles from "./Contacts.module.css";

import { v4 } from "uuid";

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
    id: "",
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
      setAlert("Please enter valid data ❌");
      return;
    }

    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
    setTimeout(() => setAlert(""), 2000);
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}

        <Button onClick={addHandler}>Add Contact</Button>
      </div>

      <div className={styles.alert}>
        {alert ? <p>{alert}</p> : <p className="hidden">.</p>}
      </div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Contact;
