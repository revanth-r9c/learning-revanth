import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters long')
        .max(15, 'Name cannot be longer than 15 characters'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required')
        .matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, 'Email must be a valid email address')
});

const EditRestaurant = () => {
    const [initialValues, setInitialValues] = useState({
        name: '',
        email: '',
        status: true
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:1337/api/restaurants/${id}`)
            .then((res) => {
                setInitialValues({
                    name: res.data.data.attributes.name,
                    email: res.data.data.attributes.email,
                    status: res.data.data.attributes.status
                });
            })
            .catch((err) => console.log(err));
    }, [id]);

    const handleUpdate = (values) => {
        axios.put(`http://localhost:1337/api/restaurants/${id}`, {
            data: values
        })
            .then(() => {
                navigate(`/`);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="edit-restaurant-form">
            <h3>Edit Restaurant</h3>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleUpdate}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field
                            as={TextField}
                            name="name"
                            label="Name"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            error={touched.name && Boolean(errors.name)}
                            helperText={<ErrorMessage name="name" />}
                        />
                        <Field
                            as={TextField}
                            name="email"
                            label="Email"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            error={touched.email && Boolean(errors.email)}
                            helperText={<ErrorMessage name="email" />}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Update
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default EditRestaurant;
