import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ContactForm = ({ initialValues, handleSubmit, validationSchema }) => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={s.formWrapper}>
        <label htmlFor="name">
          <span>Name</span>
          <Field className={s.formInput} id="name" name="name"></Field>
          <ErrorMessage name="name" component="span" className={s.error} />
        </label>
        <label htmlFor="number">
          <span>Number</span>
          <Field className={s.formInput} id="number" name="number"></Field>
          <ErrorMessage name="number" component="span" className={s.error} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
