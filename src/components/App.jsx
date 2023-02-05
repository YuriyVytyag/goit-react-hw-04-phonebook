import { useState, useEffect } from 'react';
import { PhoneBookForm } from './PhoneBook/PhoneBook';
import { Filter } from './Filter/Filter';
import { PhoneBookList } from './PhoneBookList/PhoneBookList';
import { nanoid } from 'nanoid';

const CONTACTS_KEY = 'contacts';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(CONTACTS_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(
    () => localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts)),
    [contacts]
  );

  const checkDuplicate = value =>
    contacts.some(
      ({ name }) => name.toLowerCase() === value.name.toLowerCase()
    );

  const addContact = person => {
    const data = {
      name: person.name,
      number: person.number,
      id: nanoid(),
    };
    checkDuplicate(person)
      ? alert(`This ${person.name} exist`)
      : setContacts([data, ...contacts]);
  };

  const onChange = element => {
    setFilter(element.currentTarget.value);
  };

  const onDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h2>Phonebook</h2>
      <PhoneBookForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={onChange} />
      <PhoneBookList onDelete={onDeleteContact} contactList={filterContacts} />
    </div>
  );
}
