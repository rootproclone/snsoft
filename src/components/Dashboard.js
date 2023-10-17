import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div>
      <h2>Login Successful!</h2>
      <p>Welcome to your dashboard.</p>
      <Link to="/">Back to Login</Link>
    </div>
  );
}

export default SuccessPage;
