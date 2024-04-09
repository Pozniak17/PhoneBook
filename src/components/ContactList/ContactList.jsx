import { useSelector } from "react-redux";

import { selectFilteredContacts } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <Contact key={id} name={name} number={number} id={id} />
          ))}
        </ul>
      ) : (
        <b>No contacts found</b>
      )}
    </>
  );
}
