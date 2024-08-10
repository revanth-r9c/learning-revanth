import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
                <div className='menu'>
                    <Link to="/products" className="navbar-link">Products</Link><br/>
                    <Link to="/UsersPage" className="navbar-link">Users</Link> <br/>
                    <Link to="/admin" className="navbar-link">Orders</Link><br/>
                    <Link to="/Category" className="navbar-link">Category</Link><br/>
                    <Link to="/reduxCounter" className="navbar-link">Redux Counter</Link><br/>
                    <Link to="/reduxTodo" className="navbar-link">Todos Reducer</Link><br/>
                </div>
        </nav>
    );
};

export default Navbar;