import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const validationSchema = Yup.object({
    username: Yup.string()
        .required('Username is required')
        .min(4,"Minimum 4 characters are required")
        .max(10,"User name Shouldn't exceed 10 characters"),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required')
        .matches(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, 'Email must be a valid email address'),
    password: Yup.string()
        .required('Password is required'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const Register = ({ onRegister }) => {
    const navigate=useNavigate();
    const handleSubmit = (values, { setSubmitting }) => {
        axios.post('http://localhost:1337/api/auth/local/register', {
            username: values.username,
            email: values.email,
            password: values.password
        })
        .then(response => {
            localStorage.setItem('token', response.data.jwt);
            navigate("/");
        })
        .catch(error => {
            console.error('Registration error:', error);
        })
        .finally(() => setSubmitting(false));
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 3, marginTop: '150px' }}>
                <Typography variant="h5" align="center">Register</Typography>
                <Formik
                    initialValues={{ username: '', email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field
                                as={TextField}
                                name="username"
                                label="Username"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                helperText={<ErrorMessage name="username" />}
                                error={Boolean(<ErrorMessage name="username" />)}
                            />
                            <Field
                                as={TextField}
                                name="email"
                                label="Email"
                                type="email"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                helperText={<ErrorMessage name="email" />}
                                error={Boolean(<ErrorMessage name="email" />)}
                            />
                            <Field
                                as={TextField}
                                name="password"
                                label="Password"
                                type="password"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                helperText={<ErrorMessage name="password" />}
                                error={Boolean(<ErrorMessage name="password" />)}
                            />
                             <Field
                                as={TextField}
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                helperText={<ErrorMessage name="confirmPassword" />}
                                error={Boolean(<ErrorMessage name="confirmPassword" />)}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 2 }}
                                disabled={isSubmitting}
                            >
                                Register
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Container>
    );
};

export default Register;
