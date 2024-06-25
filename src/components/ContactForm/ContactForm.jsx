import React from 'react';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d+[-\s\(\)]*$/,
      "Phone number must be only digits and allowed characters"
    )
    .min(3, "Too short")
    .max(256, "Too long")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field name="name" type="text" id={nameFieldId} />
          <ErrorMessage name="name" component="div" />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field name="number" type="text" id={numberFieldId} />
          <ErrorMessage name="number" component="div" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
