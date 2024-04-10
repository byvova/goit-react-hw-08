import { useSelector } from "react-redux";

import css from "./ContactList.module.css";
import { selectContacts, selectFilteredContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { Contact } from "../Contact/Contact";


export const ContactList = () => {


    const contacts = useSelector(selectContacts);

    const visibleContacts = useSelector(selectFilteredContacts);
    return (
        <ul className={css.list}>
            {contacts.length === 0 && <p>Create your first contact 😉</p>}
            {visibleContacts.map((contact) => (
                <li className={css.item} key={contact.id}>
                    <Contact contact={contact}></Contact>
                </li>
            ))}
        </ul>
    );
};
