// import { useState } from "react";

// import axios from "axios";
// function Addproducts(){

//     let [name,setName] = useState("");
//     let [description,setDescription] = useState("");
//     let [data,setData] =useState ([{name : "name", description: "Description"}]);

//     function nameChanged(e){
//         e.preventDefault();
//         setName(e.target.value);
//     }
//     function descriptionChanged(e){
//         e.preventDefault();
//         setDescription(e.target.value);
//     }

//     function Addproducts(){
//         let newdata = {name : name, description: description};
//         axios.post("http://localhost:3000/api/v1/categories",newdata)
//         .then(function(response){
//             console.log(response)
//             setData(response.data);
//             alert("Product is added successfully");
//         })
//         .catch(function (err){
//             console.log(err);
//             alert("server error",err);
//         })
//     }

//     return(
//         <div className="addproducts">
//             <h1>Category Form</h1>
//             <input type="text" value={name} onChange={nameChanged} placeholder="Enter Product Name"></input><br/>
//             <textarea value={description} onChange={descriptionChanged} placeholder="Enter Description of the product" rows="4" cols="50"></textarea><br/>
//             <button id="submit" onClick={Addproducts}>Submit</button> 
//         </div>
//     )
// }

// export default Addproducts;

// import React from 'react';
// import { useFormik } from 'formik';
// import axios from 'axios';

// function Addproducts() {
//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             description: ''
//         },
//         onSubmit: async (values) => {
//             try {
//                 const response = await axios.post('http://localhost:3000/api/v1/categories', values);
//                 console.log(response);
//                 alert('Product is added successfully');
//                 formik.resetForm(); 
//             } catch (err) {
//                 console.log(err);
//                 alert('Server error: ' + err.message);
//             }
//         }
//     });

//     return (
//         <div className="addproducts">
//             <h1>Category Form</h1>
//             <form onSubmit={formik.handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     value={formik.values.name}
//                     onChange={formik.handleChange}
//                     placeholder="Enter Product Name"
//                 /><br/>
//                 <textarea
//                     name="description"
//                     value={formik.values.description}
//                     onChange={formik.handleChange}
//                     placeholder="Enter Description of the product"
//                     rows="4"
//                     cols="50"
//                 /><br/>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default Addproducts;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import './Addproducts.css'
// import { useNavigate } from "react-router-dom";

// function Addproducts() {
//   let [categories, setCategories] = useState([]);

//   let Navigate = useNavigate();

//   useEffect(function () {
//     axios
//       .get(`http://localhost:3000/api/v1/categories`)
//       .then((response) => {
//         setCategories(response.data.categories);
//       })
//       .catch((error) => {
//         alert("Server is not responding. Please try again later.");
//         console.error(error);
//       });
//   }, []);


//   const validationSchema = Yup.object({
//     name: Yup.string().required("Product name is required"),
//     code: Yup.string().required("Product code is required"),
//     excerpt: Yup.string().required("Product description is required"),
//     category: Yup.string().required("Category is required"),
//     price: Yup.number()
//       .required("Price is required")
//       .positive("Price must be a positive number")
//       .min(0, "Price cannot be negative"),
//     stock: Yup.number()
//       .required("Stock is required")
//       .integer("Stock must be an integer")
//       .min(0, "Stock cannot be negative"),
//   });

//   return (
//     <div className="addproducts">
//       <h2> Add Products </h2>
//       <Formik
//         initialValues={{
//           name: "",
//           code: "",
//           excerpt: "",
//           category: "",
//           price: 0,
//           stock: 0,
//         }}
//         validationSchema={validationSchema}
//         onSubmit={(values, { setSubmitting, resetForm }) => {
//           axios
//             .post("http://localhost:3000/api/v1/products", values)
//             .then(function (response) {
//               console.log(response);
//               // alert('Product added Successfully!! :)');
//               Navigate('/ShowProducts');
//               resetForm();
//             })
//             .catch(function (err) {
//               console.log(err);
//             })
//             .finally(() => {
//               setSubmitting(false);
//             });
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <div>
//               <Field
//                 type="text"
//                 name="name"
//                 placeholder="Enter Product Name"
//               />
//               <ErrorMessage name="name" component="div" />
//             </div>
//             <div>
//               <Field
//                 type="text"
//                 name="code"
//                 placeholder="Enter Product Code"
//               />
//               <button>Generate Unique Code</button>
//               <ErrorMessage name="code" component="div" />
//             </div>
//             <div>
//               <Field
//                 type="text"
//                 name="excerpt"
//                 placeholder="Enter Description of the product"
//               />
//               <ErrorMessage name="excerpt" component="div" />
//             </div>
//             <div>
//               <Field as="select" name="category">
//                 <option value="" disabled>
//                   Select a category
//                 </option>
//                 {categories.map((cat) => (
//                   <option key={cat.id} value={cat._id}>
//                     {cat.name}
//                   </option>
//                 ))}
//               </Field>
//               <ErrorMessage name="category" component="div" />
//             </div>
//             <div>
//               <Field
//                 type="number"
//                 name="price"
//                 placeholder="Enter the price of your product"
//               />
//               <ErrorMessage name="price" component="div" />
//             </div>
//             <div>
//               <Field
//                 type="number"
//                 name="stock"
//                 placeholder="Enter the stock quantity"
//               />
//               <ErrorMessage name="stock" component="div" />
//             </div>
//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default Addproducts;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; 
import './Addproducts.css';

function Addproducts() {
  let [categories, setCategories] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/categories")
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        alert("Server is not responding. Please try again later.");
        console.error(error);
      });
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    code: Yup.string().required("Product code is required"),
    excerpt: Yup.string().required("Product description is required"),
    category: Yup.string().required("Category is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be a positive number")
      .min(0, "Price cannot be negative"),
    stock: Yup.number()
      .required("Stock is required")
      .integer("Stock must be an integer")
      .min(0, "Stock cannot be negative"),
  });

 
  const generateCode = () => {
    const uuid = uuidv4(); 
    const code = uuid.slice(0, 6); 
    return code;
  };

  return (
    <div className="addproducts">
      <h2>Add Products</h2>
      <Formik
        initialValues={{name: "", code: "", excerpt: "", category: "", price: 0, stock: 0,}}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          axios
            .post("http://localhost:3000/api/v1/products", values)
            .then((response) => {
              console.log(response);
              navigate('/ShowProducts');
              resetForm();
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div>
              <Field type="text" name="name" placeholder="Enter Product Name"/>
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field type="text" name="code" style={{'display':"inline"}} placeholder="Enter Product Code"/>
              <button type="button" onClick={() => setFieldValue("code", generateCode())}>
                Generate Unique Code
              </button>
              <ErrorMessage name="code" component="div" />
            </div>
            <div>
              <Field type="text" name="excerpt" placeholder="Enter Description of the product"/>
              <ErrorMessage name="excerpt" component="div" />
            </div>
            <div>
              <Field as="select" name="category">
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="category" component="div" />
            </div>
            <div>
              <Field type="number" name="price" placeholder="Enter the price of your product"/>
              <ErrorMessage name="price" component="div" />
            </div>
            <div>
              <Field type="number" name="stock" placeholder="Enter the stock quantity"/>
              <ErrorMessage name="stock" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Addproducts;
