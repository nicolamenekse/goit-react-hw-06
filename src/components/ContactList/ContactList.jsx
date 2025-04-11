import React from "react";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./ContactList.module.css";

export default function ContactList() {
  const items = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter)
  );

  return (
    <div className={css.contactList}>
      <ul>
        <li>
          {filteredItems.map((item) => (
            <Contact
              key={item.id}
              name={item.name}
              number={item.number}
              id={item.id}
            />
          ))}
        </li>
      </ul>
    </div>
  );
}
