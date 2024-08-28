import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <Link to="/admin/addProducts">
          <button>Add Products</button>
        </Link>
        <Link to="/admin/products">
          <button>Display Products</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
