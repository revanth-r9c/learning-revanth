// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import RestaurantList from './RestaurantList';
// import RestaurantDetails from './RestaurantDetails';
// import EditRestaurant from './EditRestaurant';
// import Login from './Login';
// import Register from './Register';

// const App = () => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         setIsAuthenticated(!!token);
//     }, [isAuthenticated]); 

//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={isAuthenticated ? <RestaurantList /> : <Navigate to="/login" />} />
//                 <Route path="/details/:id" element={isAuthenticated ? <RestaurantDetails /> : <Navigate to="/login" />} />
//                 <Route path="/edit/:id" element={isAuthenticated ? <EditRestaurant /> : <Navigate to="/login" />} />
//                 <Route path="/login" element={!isAuthenticated ? <Login onLogin={() => setIsAuthenticated(true)} /> : <Navigate to="/" />} />
//                 <Route path="/register" element={!isAuthenticated ? <Register onRegister={() => setIsAuthenticated(true)} /> : <Navigate to="/" />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;





// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // import RestaurantList from './RestaurantList';
// // import RestaurantDetails from './RestaurantDetails';
// // import EditRestaurant from './EditRestaurant';
// // import Login from './Login';
// // import Register from './Register';

// // const App = () => {
// //     const isAuthenticated = !!localStorage.getItem('token');

// //     return (
// //         <Router>
// //             <Routes>
// //                 <Route path="/" element={isAuthenticated ? <RestaurantList /> : <Navigate to="/login" />} />
// //                 <Route path="/details/:id" element={isAuthenticated ? <RestaurantDetails /> : <Navigate to="/login" />} />
// //                 <Route path="/edit/:id" element={isAuthenticated ? <EditRestaurant /> : <Navigate to="/login" />} />
// //                 <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
// //                 <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />
// //             </Routes>
// //         </Router>
// //     );
// // };

// // export default App;




// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import './App.css';
// // import ProductsAPI from './ProductsAPI';
// // import CartPage from './CartPage';
// // import axios from 'axios';
// // import LoginFeature from './LoginFeature';

// // function App() {
// //     return (
// //         <div>
// //         <Router>
// //         <Routes>
// //           <Route path="/" element={<ProductsAPI/>}/>
// //           <Route path="/cart" element={<CartPage/>}/>
// //         </Routes>
// //       </Router>
// //       {/* <LoginFeature/> */}
// //       </div>
// //     );
// // }

// // export default App;

// // import React, { useState } from 'react';
// // import './App.css';
// // import user_icon from '../src/user-icon.png';
// // import { BrowserRouter as Link, Router, Route, Routes } from 'react-router-dom';
// // function App() {
// //   const [show, setShow] = useState(false);
// //   const [username,setusername]=useState("");
// //   const [open, setOpen]=useState(false);
// //   function Login(){
// //     setShow(true);
// //   };
// //   function Logout(){
// //     setShow(false);
// //   };

// //   return (
    
// //     <div className="App">
//       {/* {!show ? (<div class="forms">
//         <input type='text' placeholder='username' onChange={(e)=>setusername(e.target.value)}/><br/>
//         <input type='password' placeholder='password'/><br/><br/>
//         <button onClick={Login}>Login</button>
//       </div>): (<div className="menu">
//           <h2>Hi {username}, Good Morning :)</h2>
//           <h3>Menu</h3>
//           <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//           </ul>
//           <button onClick={Logout}>Logout</button>
//         </div>)} */}
//         {/* <Link to="#">Show Users</Link> */}
//       // <div className='menu-container'>
//       //   <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
//       //     <img src={user_icon}></img>
//       //   </div>
//       //   <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
//       //     <h4>Hi Revanth,<br/><span>Welcome back !</span></h4>
//       //     <ul>
//       //       <DropdownItem text={"My Profile"} url={"/profile"}/>
//       //       <DropdownItem text={"Edit Profile"} url={"/editProfile"}/>
//       //       <DropdownItem text={"Logout"} url={"/logout"}/>
//       //     </ul>
//       //   </div>
//       // </div>
//       {/* <Routes>
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/editProfile" element={<EditProfile />} />
//           <Route path="/logout" element={<Logout />} />
//         </Routes> */}
// //     </div>
   
// //   );
// // }

// // function DropdownItem(props){
// //   return(
// //     <li className='dropdownItem'>
// //       <Link to={props.url}>{props.text}</Link>
// //     </li>
// //   )
// // }

// // export default App;


// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { IconButton, Menu, MenuItem, Typography, Box } from '@mui/material';
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// // function App() {
// //   const [anchorEl, setAnchorEl] = useState(null);

// //   const handleClick = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };

// //   return (
// //     <div className="App">
// //       <IconButton onClick={handleClick}
// //         sx={{
// //           position: 'absolute',
// //           top: 20,
// //           right: 20,
// //           height: 50,
// //           width: 50,
// //           border: '2px solid black',
// //           backgroundColor: 'lightskyblue',
// //           borderRadius: '50%',
// //           overflow: 'hidden',
// //         }}
// //       >
// //         <AccountCircleIcon sx={{ fontSize: 40 }} />
// //       </IconButton>
// //       <Menu
// //         anchorEl={anchorEl}
// //         open={Boolean(anchorEl)}
// //         onClose={handleClose}
// //         PaperProps={{
// //           sx: {
// //             borderRadius: '10px',
// //             width: 200,
// //             mt: 2,
// //             p: 2,
// //           },
// //         }}
// //       >
// //         <Typography variant="h6" align="center">
// //           Hi Revanth,<br />
// //           <span style={{ fontSize: '12px', fontWeight: '400' }}>Welcome back!</span>
// //         </Typography>
// //         <MenuItem onClick={handleClose}>
// //           <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
// //             My Profile
// //           </Link>
// //         </MenuItem>
// //         <MenuItem onClick={handleClose}>
// //           <Link to="/editProfile" style={{ textDecoration: 'none', color: 'inherit' }}>
// //             Edit Profile
// //           </Link>
// //         </MenuItem>
// //         <MenuItem onClick={handleClose}>
// //           <Link to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>
// //             Logout
// //           </Link>
// //         </MenuItem>
// //       </Menu>
// //     </div>
// //   );
// // }

// // export default App;


// import './App.css';
// import Form from './Components/Common/Form';
// import { BrowserRouter as Router } from 'react-router-dom'

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Form />
//       </div>
//     </Router>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Common/Form';
import Home from './Components/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  

  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
      .then((response) => {
      navigate('/home')
      sessionStorage.setItem('Auth Token',
      response._tokenResponse.refreshToken)
      })
      .catch((error) => {
        if(error.code === 'auth/wrong-password'){
          toast.error('Please check the Password');
        }
        if(error.code === 'auth/user-not-found'){
          toast.error('Please check the Email');
        }
      })
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate('/home');
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
          }
        })
    }
  };

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/home')
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route
          path='/login'
          element={
            <Form
              title="Login"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
            />
          }
        />
        <Route
          path='/register'
          element={
            <Form
              title="Register"
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(2)}
            />
          }
        />
        <Route path='/home' element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
    
  );
}

export default App;
