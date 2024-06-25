import { useState } from "react";
import ContactList from "../ContactList/ContactList";
import initialContacts from '../../contacts.json'

import ContactForm from "../ContactForm/ContactForm";


function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const adContacts = (newContact) => {
    setContacts((prevContacts) => {
  return [...prevContacts, newContact]
})
  }

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={adContacts} />
       {/* <SearchBox />  */}
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;