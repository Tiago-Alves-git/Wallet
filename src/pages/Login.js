import PropTypes from 'prop-types';
import React from 'react';
import '../Style/Login.css';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { addEmail, ADD_EMAIL } from '../redux/actions';
import LoginForm from '../components/LoginForm';
// No import

class Login extends React.Component {
  state = {
    Email: '',
    Senha: '',
    LoginButton: true,
  };

  handleLogin = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.loginButton());
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
        <LoginForm
          handleLogin={ this.handleLogin }
          Email={ Email }
          Senha={ Senha }
          LoginButton={ LoginButton }
          handleSubmit={ this.handleSubmit }
        />
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
