import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";



export const ContactForm = () => {
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(3, 'Name must be at least 3 characters')
            .max(50, 'Name cannot exceed 50 characters'),
        number: Yup.string()
            .required('Number is required')
            .min(3, 'Number must be at least 3 characters')
            .max(50, 'Number cannot exceed 50 characters')
    });

    const handleSubmit = (values, actions) => {
        dispatch(addContact({ id: nanoid(), name: values.name, number: values.number }))
        actions.resetForm()
    };

    return (
        <Formik
            initialValues={{
                name: "",
                number: ""
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form className={css.formContainer}>
                    <p className={css.formText}>Name</p>
                    <Field name="name" />
                    {errors.name && touched.name && <p>{errors.name}</p>}
                    <p className={css.formText}>Number</p>
                    <Field name="number" />
                    {errors.number && touched.number && <p>{errors.number}</p>}
                    <button className={css.formBtn} type="submit">Add contact</button>
                </Form>
            )}
        </Formik>
    );
};
