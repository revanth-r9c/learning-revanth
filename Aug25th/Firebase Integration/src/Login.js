import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
    identifier: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const Login = ({ onLogin }) => {
    const navigate=useNavigate();
    const handleSubmit = (values, { setSubmitting }) => {
        axios.post('http://localhost:1337/api/auth/local', {
            identifier: values.identifier,
            password: values.password
        })
        .then(response => {
            localStorage.setItem('token', response.data.jwt);
            onLogin(); 
        })
        .catch(error => {
            console.error('Login error:', error);
            navigate("/register");
        })
        .finally(() => setSubmitting(false));
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 3, marginTop: '150px' }}>
                <Typography variant="h5" align="center">Login</Typography>
                <Formik
                    initialValues={{ identifier: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <Field
                                as={TextField}
                                name="identifier"
                                label="Email"
                                type="email"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                helperText={<ErrorMessage name="identifier" />}
                                error={Boolean(<ErrorMessage name="identifier" />)}
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
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 2 }}
                                disabled={isSubmitting}
                            >
                                Login
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Container>
    );
};

export default Login;
