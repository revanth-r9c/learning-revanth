// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaHome, FaListAlt, FaCalculator, FaEnvelope } from 'react-icons/fa';
// import './NavBar.css';

// const Navbar: React.FC = () => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <ul className="navbar-menu">
//                     <li className="navbar-item">
//                         <Link to="/home" className="navbar-link">
//                             <FaHome className="icon" />
//                             Home
//                         </Link>
//                     </li>
//                     <li className="navbar-item">
//                         <Link to="/todo" className="navbar-link">
//                             <FaListAlt className="icon" />
//                             Todo
//                         </Link>
//                     </li>
//                     <li className="navbar-item">
//                         <Link to="/counter" className="navbar-link">
//                             <FaCalculator className="icon" />
//                             Counter
//                         </Link>
//                     </li>
//                     <li className="navbar-item">
//                         <Link to="/params/Hello Dhanush" className="navbar-link">
//                             <FaEnvelope className="icon" />
//                             Params
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaListAlt, FaCalculator, FaEnvelope } from 'react-icons/fa';
import './NavBar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <Link to="/home" className="navbar-link">
                            <FaHome className="icon" />
                            Home
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/todo" className="navbar-link">
                            <FaListAlt className="icon" />
                            Todo
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/counter" className="navbar-link">
                            <FaCalculator className="icon" />
                            Counter
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/params/products" className="navbar-link">
                            <FaEnvelope className="icon" />
                            Params
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
