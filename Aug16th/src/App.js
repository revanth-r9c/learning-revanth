// import React, { useState } from 'react';
// import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// function App() {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className="App">
//       <IconButton
//         onClick={handleClick}
//         sx={{
//           position: 'absolute',
//           top: 20,
//           right: 20,
//           height: 50,
//           width: 50,
//           border: '2px solid black',
//           backgroundColor: 'lightskyblue',
//           borderRadius: '50%',
//           overflow: 'hidden',
//         }}
//       >
//         <AccountCircleIcon sx={{ fontSize: 40 }} />
//       </IconButton>
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         PaperProps={{
//           sx: {
//             borderRadius: '10px',
//             width: 200,
//             mt: 2,
//             p: 2,
//           },
//         }}
//       >
//         <Typography variant="h6" align="center">
//           Hi Revanth,<br />
//           <span style={{ fontSize: '12px', fontWeight: '400' }}>Welcome back!</span>
//         </Typography>
//         <MenuItem onClick={handleClose}>
//           <a href="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
//             My Profile
//           </a>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <a href="/editProfile" style={{ textDecoration: 'none', color: 'inherit' }}>
//             Edit Profile
//           </a>
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <a href="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>
//             Logout
//           </a>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import HomePage from './HomePage';

// function App() {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <IconButton
//           onClick={handleClick}
//           sx={{
//             position: 'absolute',
//             top: 20,
//             right: 20,
//             height: 50,
//             width: 50,
//             border: '2px solid black',
//             backgroundColor: 'lightskyblue',
//             borderRadius: '50%',
//             overflow: 'hidden',
//           }}
//         >
//           <AccountCircleIcon sx={{ fontSize: 40 }} />
//         </IconButton>
//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//           PaperProps={{
//             sx: {
//               borderRadius: '10px',
//               width: 200,
//               mt: 2,
//               p: 2,
//             },
//           }}
//         >
//           <Typography variant="h6" align="center">
//             Hi User,<br />
//             <span style={{ fontSize: '12px', fontWeight: '400' }}>Welcome back!</span>
//           </Typography>
//           <MenuItem onClick={handleClose}>
//             <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//               Home
//             </Link>
//           </MenuItem>
//           <MenuItem onClick={handleClose}>
//             <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
//               My Profile
//             </Link>
//           </MenuItem>
//           <MenuItem onClick={handleClose}>
//             <Link to="/editProfile" style={{ textDecoration: 'none', color: 'inherit' }}>
//               Edit Profile
//             </Link>
//           </MenuItem>
//           <MenuItem onClick={handleClose}>
//             <Link to="/logout" style={{ textDecoration: 'none', color: 'inherit' }}>
//               Logout
//             </Link>
//           </MenuItem>
//         </Menu>

//         {/* Define Routes Here */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/profile" element={<ProfilePage />} />
//           <Route path="/editProfile" element={<EditProfilePage />} />
//           <Route path="/logout" element={<LogoutPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// // Define your component for each route
// const homePage = () => <div>Home Page</div>;
// const ProfilePage = () => <div>Profile Page</div>;
// const EditProfilePage = () => <div>Edit Profile Page</div>;
// const LogoutPage = () => <div>Logout Page</div>;

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MainLayout from './MainLayout';
// import JwtDecode from './JwtDecode';
// import JwtTokenDecoder from './JwtTokenDecoder';
// import ViewRestaurants from './ViewRestaurants';

// function App() {
//   return (
//     // <Router>
//     //   <Routes>
//     //     <Route path="/*" element={<MainLayout />} />
//     //     <Route path="/JwtDecode" element={<JwtDecode />} />
//     //     <Route path="/JwtTokenDecoder" element={<JwtTokenDecoder />} />
//     //   </Routes>
//     // </Router>
    
//     <ViewRestaurants/>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantList from './RestaurantList';
import RestaurantDetails from './RestaurantDetails';
import EditRestaurant from './EditRestaurant';

const App = () => {
    return (
        <Router>
            <Routes>
              <Route path="/" element={<RestaurantList />} />
                <Route path="/details/:id" element={<RestaurantDetails />} />
                <Route path="/edit/:id" element={<EditRestaurant />} />
            </Routes>
        </Router>
    );
};

export default App;

