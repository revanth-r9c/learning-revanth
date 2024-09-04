import React from 'react';
import './Params.css';
import { useParams } from 'react-router-dom';

const Params: React.FC = () => {
  const { id } = useParams<{ id?: string }>(); 

  return (
    <div className="params-container">
      <div className="params-card">
        <h2 className="params-title">Params Passed</h2>
        <p className="params-message">The params are: {id ? id : 'No params passed'}</p>
      </div>
    </div>
  );
};

export default Params;
