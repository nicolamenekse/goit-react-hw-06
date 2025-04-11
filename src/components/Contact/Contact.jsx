import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.contact}>
      <div className={css.name}>
        <FaUser />
        {name}
      </div>
      <div className={css.number}>
        <BsFillTelephoneFill />
        {number}
      </div>
      <div className={css.button}>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
