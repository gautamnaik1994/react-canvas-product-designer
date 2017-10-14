import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div>
    <h1>Landing Page</h1>
    <Link to="/workarea">Go to canvas</Link>
  </div>
);
export default LandingPage;
