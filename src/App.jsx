import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("savedContact"));
    if (savedData) {
      return savedData;
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const [filter, setFilter] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("This field is required!")
      .min(3, "Name must be more than 3 chars!")
      .max(20, "Name must be less than 20 chars!"),
    number: Yup.number()
      .typeError("It's not a number!")
      .required("This field is required!"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  useEffect(() => {
    window.localStorage.setItem("savedContact", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    setContacts((prev) => [...prev, newContact]);
    actions.resetForm();
  };

  const handleDelete = (contactId) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== contactId));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        validationSchema={validationSchema}
      />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </>
  );
}

export default App;
