import PropTypes from 'prop-types';
import React from 'react';
import '../Style/Login.css';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { addEmail, ADD_EMAIL } from '../redux/actions';
// No import

class Login extends React.Component {
  state = {
    Email: '',
    Senha: '',
    LoginButton: true,
  };

  handleLogin = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    }, () => this.loginButton());
  };

  loginButton = () => {
    const { Email, Senha } = this.state;
    const emailCorreto = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const senhaCorreta = /.{6,}/;
    this.setState({
      LoginButton: !(emailCorreto.test(Email) && senhaCorreta.test(Senha)),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { Email } = this.state;
    dispatch(addEmail(ADD_EMAIL, Email));
    history.push('./carteira');
  };

  render() {
    const { Email, Senha, LoginButton } = this.state;
    return (
      <div>
        <Header />
        <form className="Formulario">
          <div className="mb-3">
            <label htmlFor="InputEmail" className="form-label">
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Email"
                onChange={ this.handleLogin }
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
                onChange={ this.handleLogin }
                value={ Senha }
                data-testid="password-input"
              />
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={ LoginButton }
            onClick={ this.handleSubmit }
          >
            Entrar

          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect()(Login);
