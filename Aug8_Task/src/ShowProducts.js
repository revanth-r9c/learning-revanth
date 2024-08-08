// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Addproducts from './Addproducts';

// function ShowProducts() {
//     const [data, setData] = useState([]);
//     const navigate = useNavigate();

//     function displayProducts() {
//         const url = "http://localhost:3000/api/v1/products";
//         axios.get(url)
//             .then(function (response) {
//                 console.log(response.data);
//                 setData(response.data.categories);
//             })
//             .catch(function (error) {
//                 alert("Server is not responding");
//             });
//     }

//     // function viewProductDetails(Id) {
//     //     navigate(`/categories/${Id}`);
//     // }

//     function DeleteProducts(index){
//         console.log(index);
//         axios
//             .delete(`http://localhost:3000/api/v1/categories/${index}`)
//             .then(function(response)
//             {
//                 console.log(response);
//                 displayProducts();
//             })
//             .catch(function(error)
//             {
//                 console.log(error);
//             });
//         let newIds = data.filter(function (i)
//         {
//             if(index == i)
//             {
//                 return false;
//             }
//             else
//             {
//                 return true;
//             }
//         });
//     setData(newIds);
//     }

//     const handleButtonClick = () => {
//         navigate('/admin/category');
//     }

//     return (
//         <div className='outer'>
//             <h1>Get Product Details</h1><br/>
//             <button onClick={displayProducts}>Show Products</button><br/><br/>
//             <button onClick={handleButtonClick}>Add Categories</button>
//             <div className='inner'>
//                 {
//                 data.map(function (value) {
//                     return (
//                         <div className='inside' key={value._id}>
//                             <p><b>Name:</b> {value.name}</p>
//                             <p><b>Description:</b> {value.description}</p>
//                             {/* <button onClick={() => viewProductDetails(value._id)}>View Details</button> */}
//                             <button onClick={() => DeleteProducts(value._id)}>Delete</button> 
                            
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }

// export default ShowProducts;

// import axios from 'axios';
// import { useState } from 'react';
// import { Outlet, useNavigate, Link } from 'react-router-dom';
// import ProductDetails from './ProductDetails';

// function ShowProducts() {
//     const [data, setData] = useState([]);
//     const [id,setID]=useState("");
//     const navigate = useNavigate();

//     function displayProducts() {
//         const url = "http://localhost:3000/api/v1/products";
//         axios.get(url)
//         .then(function (response) {
//             setData(response.data.products);
//             setID(response.data.products._id);
//         })
//         .catch(function (error) {
//             alert("Server is not responding",error);
//         });
//     }   

// function viewProductDetails(productId) {
    
//     navigate(`/products/${productId}`);
// }

// return (
//     <div className='outer'>
//         <h1>Get Product Details</h1>
//         <button onClick={displayProducts}>Show Products</button><br/><br/>
//         <div className='inner'>
//         {
//             data.map(function (value) {
//             return (
//                 <div className='inside' key={value._id}>
//                     <p><b>Name:</b> {value.name}</p>
//                     <p><b>Price:</b> {value.price}</p>
//                     <Link to={value}>Go to {value}</Link>
//                 </div>
//             );
//             })
//         }
//         </div>
//     </div>
// );
// }

// export default ShowProducts;

import axios from 'axios';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./products.css";

function ShowProducts() {
    const [data, setData] = useState([]);

    function displayProducts() {
        const url = "http://localhost:3000/api/v1/products";
        axios.get(url)
            .then(function (response) {
                setData(response.data.products);
            })
            .catch(function (error) {
                alert("Server is not responding", error);
            });
        return data;
    }

    return (
        <div className='outer'>
            <h1>Get Product Details</h1>
            <button onClick={displayProducts}>Show Products</button><br/><br/>
            <div className='inner'>
                {data.map(function (value) {
                    return (
                        <div className='inside' key={value._id}>
                            <p><b>Name:</b> {value.name}</p>
                            <p><b>Price:</b> {value.price}</p>
                            <div id='link'>
                            <Link to={`/products/${value._id}`} style={{ textDecoration: 'none' }} >View Details</Link><br/>
                            </div>
                        </div>
                    );
                })}   
            </div>
            <Outlet/><br/>
        </div>
    );
}

export default ShowProducts;
