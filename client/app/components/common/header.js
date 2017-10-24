import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';

const Header = () => (
  <nav className="navbar has-shadow">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <img src={Logo} alt="Product Image Generator" />
      </Link>
    </div>
    <div className="navbar-end">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/gautamnaik1994/react-canvas-product-designer"
        className="navbar-item"
      >
        <span className="icon">
          <i className="icon-github-logo is-size-5" />
        </span>
      </a>
    </div>
  </nav>
);
export default withRouter(Header);
