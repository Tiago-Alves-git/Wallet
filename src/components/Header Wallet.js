import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';
import { connect } from 'react-redux';
import { BiUserCheck } from 'react-icons/bi';

class HeaderWallet extends Component {
  render() {
    const { email, totalValue } = this.props;
    return (
      <div
        className="HeaderWallet p-3 mb-2 bg-dark text-white
      "
      >
        <Link to="/" className="btn btn-primary Home">
          Home
        </Link>
        <h1 className="TituloHeader">
          Carteira Digital
        </h1>
        <div data-testid="email-field">
          <BiUserCheck />
          <br />
          { email }
        </div>
        <div data-testid="total-field">
          { Number(totalValue).toFixed(2) }
        </div>
        <div data-testid="header-currency-field">
          { ' BRL ' }
        </div>
      </div>
    );
  }
}

HeaderWallet.propTypes = {
  email: PropTypes.string,
}.isrequired;
const mapStateToProps = (state) => ({
  email: state.user.email,
  totalValue: state.wallet.totalValue,
});

export default connect(mapStateToProps)(HeaderWallet);
