import React from 'react';

const LinkedInAuthPage = () => {
  const handleLogin = () => {
    window.location.href = '/api/connect/linkedin';
  };

  return (
    <div>
      <h1>Login with LinkedIn</h1>
      <button onClick={handleLogin}>Connect with LinkedIn</button>
    </div>
  );
};

export default LinkedInAuthPage;
