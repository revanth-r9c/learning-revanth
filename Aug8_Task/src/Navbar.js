import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item">   
                    <Link to="/products" className="navbar-link">Products</Link>
                    <Link to="/UsersPage" className="navbar-link">Users</Link> 
                    <Link to="/admin" className="navbar-link">Orders</Link>
                    <Link to="/Category" className="navbar-link">Category</Link>
                </li>
                {/* <li className="navbar-item">   
                    <Link to="/show" className="navbar-link">Show</Link>
                </li> */}
            </ul>
        </nav>
    );
};

export default Navbar;