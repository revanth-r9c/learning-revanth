// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditRestaurant = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [status, setStatus] = useState(true);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:1337/api/restaurants/${id}`, {
//         headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`
//         }
//       })
//       .then(response => {
//         setName(response.data.data.attributes.name);
//         setEmail(response.data.data.attributes.email);
//         setStatus(response.data.data.attributes.status);
//       })
//       .catch(error => console.error('Error fetching restaurant:', error));
//   }, [id]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`http://localhost:1337/api/restaurants/${id}`, {
//         data: { name, email, status }
//     }, {
//         headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`
//         }
//     })
//       .then(() => {
//         navigate('/'); 
//       })
//       .catch(error => console.error('Error updating restaurant:', error));
//   };

//   return (
//     <div className="edit-restaurant-container">
//       <h2>Edit Restaurant</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         </label><br/><br/>
//         <label>
//           Email:   
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </label><br/><br/>
//         <label>
//           Status:
//           <input type="checkbox" checked={status} onChange={(e) => setStatus(e.target.checked)} />
//         </label><br/><br/>
//         <button type="submit">Update</button><br/>
//         <button type="button" onClick={() => navigate('/')}>Cancel</button>
//       </form>
//     </div>
//   );
// };

// export default EditRestaurant;

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
        <div className="edit-restaurant-form" style={{
            padding: '20px',
            backgroundColor: 'white',
            border: '1px solid grey',
            borderRadius: '10px',
            maxWidth: '300px',
            margin: 'auto',
            textAlign: 'center',
            marginTop: '100px'
        }}>
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
