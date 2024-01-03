// LoginForm.js
import React from 'react';
import PropTypes from 'prop-types';

function LoginForm({ handleLogin, Email, Senha, LoginButton, handleSubmit }) {
  return (
    <form className="Formulario">
      <div className="mb-3">
        <label htmlFor="InputEmail" className="form-label">
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Email"
            onChange={ handleLogin }
            name="Email"
            value={ Email }
            data-testid="email-input"
          />
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="InputPassword" className="form-label">
          <input
            type="password"
            className="form-control"
            placeholder="Senha"
            name="Senha"
            onChange={ handleLogin }
            value={ Senha }
            data-testid="password-input"
          />
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={ { opacity: LoginButton === true ? '0.3' : 1 } }
        disabled={ LoginButton }
        onClick={ handleSubmit }
      >
        Entrar

      </button>
    </form>
  );
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  Email: PropTypes.string.isRequired,
  Senha: PropTypes.string.isRequired,
  LoginButton: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
