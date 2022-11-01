import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/" className="btn btn-primary Home">
          Home
        </Link>
        <h1 className="TituloHeader">
          Carteira Digital
        </h1>
      </div>
    );
  }
}

export default Header;
