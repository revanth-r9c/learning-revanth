// import { useEffect, useState } from "react";
// import axios from "axios";
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import { Link } from "react-router-dom";
// import kfc from './kfc.jpg'; 
// import mcdonalds from './McDonalds.png'; 
// import nagarjuna from './nagarjuna.jpg'; 
// import defaultImg from './default.jpg';
// import './RestaurantList.css'; 

// const ViewRestaurants = () => {
//     const [details, setDetails] = useState([]);
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         status: true
//     });
//     const [selectedRestaurant, setSelectedRestaurant] = useState(null); 
//     const [showForm, setShowForm] = useState(false); 

//     useEffect(() => {
//         axios.get("http://localhost:1337/api/restaurants")
//             .then((res) => {
//                 setDetails(res.data.data);
//             })
//             .catch((err) => console.log(err));
//     }, []);

//     const handleInputChange = (event) => {
//         const { name, value, type, checked } = event.target;
//         setForm({
//             ...form,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const handleSubmit = () => {
//         axios.post("http://localhost:1337/api/restaurants", {
//             data: form
//         })
//             .then((res) => {
//                 setDetails([...details, res.data.data]);
//                 setForm({
//                     name: '',
//                     email: '',
//                     status: true
//                 });
//                 setShowForm(false); 
//             })
//             .catch((err) => console.log(err));
//     };

//     const toggleForm = () => {
//         setShowForm(!showForm);
//         setSelectedRestaurant(null); 
//     };

//     const getImageUrl = (name) => {
//         switch (name) {
//             case 'KFC':
//                 return kfc;
//             case 'McDonalds':
//                 return mcdonalds;
//             case 'Nagarjuna':
//                 return nagarjuna;
//             default:
//                 return defaultImg; 
//         }
//     };

//     return (
//         <div className="view-details">
//             <h1>Restaurant Management</h1>
//             <div className="details-card">
//                 {details.map((value, index) => (
//                     <Box
//                         key={index}
//                         className="details-card-item"
//                     >
//                         <img
//                             src={getImageUrl(value.attributes.name)} 
//                             alt={value.attributes.name}
//                         />
//                         <p><b>Name: </b> {value.attributes.name}</p>
//                         <Link to={`/details/${value.id}`}>
//                             <Button variant="contained" color="primary">
//                                 View Details
//                             </Button>
//                         </Link>
//                     </Box>
//                 ))}
//             </div>
//             <br/><br/>
//             <Button
//                 variant="contained"
//                 color="secondary"
//                 className="add-restaurant-button"
//                 onClick={toggleForm}
//             >
//                 {showForm ? "Cancel" : "Add Restaurant"}
//             </Button>

//             {showForm && (
//                 <div className="add-restaurant-form">
//                     <h3>Add New Restaurant</h3>
//                     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                         <TextField
//                             fullWidth
//                             label="Name"
//                             name="name"
//                             value={form.name}
//                             onChange={handleInputChange}
//                             margin="normal"
//                             className="form-field"
//                         />
//                         <TextField
//                             fullWidth
//                             label="Email"
//                             name="email"
//                             value={form.email}
//                             onChange={handleInputChange}
//                             margin="normal"
//                             className="form-field"
//                         />
//                         <Button
//                             variant="contained"
//                             color="primary"
//                             onClick={handleSubmit}
//                         >
//                             Add Restaurant
//                         </Button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ViewRestaurants;




import { useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import kfc from './kfc.jpg'; 
import mcdonalds from './McDonalds.png'; 
import nagarjuna from './nagarjuna.jpg'; 
import defaultImg from './default.jpg';
import './RestaurantList.css';

const getImageUrl = (name) => {
    switch (name) {
        case 'KFC':
            return kfc;
        case 'McDonalds':
            return mcdonalds;
        case 'Nagarjuna':
            return nagarjuna;
        default:
            return defaultImg; 
    }
};


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

const RestaurantList = () => {
    const [details, setDetails] = useState([]);
    const [showForm, setShowForm] = useState(false); 

    useEffect(() => {
        axios.get("http://localhost:1337/api/restaurants")
            .then((res) => {
                setDetails(res.data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleSubmit = (values, { resetForm }) => {
        axios.post("http://localhost:1337/api/restaurants", {
            data: values
        })
            .then((res) => {
                setDetails([...details, res.data.data]);
                resetForm();
                setShowForm(false); 
            })
            .catch((err) => console.log(err));
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="view-details">
            <h1>Restaurant Management</h1>
            <div className="details-card">
                {details.map((value, index) => (
                    <Box
                        key={index}
                        className="details-card-item"
                    >
                        <img
                            src={getImageUrl(value.attributes.name)} 
                            alt={value.attributes.name}
                        />
                        <p><b>Name: </b> {value.attributes.name}</p>
                        <Link to={`/details/${value.id}`}>
                            <Button variant="contained" color="primary">
                                View Details
                            </Button>
                        </Link>
                    </Box>
                ))}
            </div>

            <Button
                variant="contained"
                color="secondary"
                className="add-restaurant-button"
                onClick={toggleForm}
            >
                {showForm ? "Cancel" : "Add Restaurant"}
            </Button>

            {showForm && (
                <Formik
                    initialValues={{ name: '', email: '', status: true }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form className="add-restaurant-form">
                            <h3>Add New Restaurant</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div className="form-field">
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
                                </div>
                                <div className="form-field">
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
                                </div>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Add Restaurant
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
};

export default RestaurantList;

