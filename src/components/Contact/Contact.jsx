import { SlUser } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import css from '../Contact/Contact.module.css';

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export const Contact = ({ contact }) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    };

    return (
        <div>
            <div className={css.infoContainer}>
                <div>
                    <div className={css.personalInfo}>
                        <SlUser width="30px" height="30px" />
                        <p className={css.info}>{contact.name}</p>
                    </div>
                    <div className={css.personalInfo}>
                        <FaPhoneAlt width="30px" height="30px" />
                        <p className={css.info}>{contact.number}</p>
                    </div>
                </div>
                <div>
                    <button onClick={handleDelete} className={css.contactsBtn}>Delete</button>
                </div>
            </div>
        </div>
    );
};