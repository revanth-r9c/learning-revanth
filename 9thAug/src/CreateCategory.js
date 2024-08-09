import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateCategory.css'; // Ensure this file is updated accordingly

const CreateCategory = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/v1/categories', { name, description })
      .then(() => {
        alert("Category Created Successfully!! :)")
        navigate('/'); 
      })
      .catch(error => console.error('Error creating category:', error));
  };

  return (
    <div className="create-category-container">
      <h2>Create Category</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label><br/><br/>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label><br/>
        <button type="submit">Create</button><br/>
        <button type="button" onClick={() => navigate('/Category')}>Cancel</button>
      </form>
    </div>
  );
};

export default CreateCategory;

