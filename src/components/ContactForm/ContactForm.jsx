import React, { useId, useState } from "react";
import { store } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Formik, Form, Field } from "formik";
import css from './ContactForm.module.css'

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleAddContact = (values, actions) => {
    if (values.name.trim()) {
      const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
      };
      dispatch(addContact(newContact));
      actions.resetForm();
    }
  };

  return (
    <div className={css.contactForm} >
      <Formik initialValues={initialValues} onSubmit={handleAddContact}>
        <Form className={css.form} >
          <div className={css.name} >
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId} />
          </div>
          <div className={css.number} >
            <label htmlFor={numberId}>Number</label>
            <Field type="number" name="number" id={numberId} />
          </div>
          <button type="submit">Gönder</button>
        </Form>
      </Formik>
    </div>
  );
}
