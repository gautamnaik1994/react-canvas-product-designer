import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div>
    <h1 className="title">Landing page</h1>
    <div>
      <Link to="/workarea">Design Shirt</Link>
    </div>
    <div>
      <Link to="/workarea">Design Cup</Link>
    </div>
  </div>
);
export default LandingPage;
