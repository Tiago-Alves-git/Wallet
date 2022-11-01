import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import requestCurrencies from '../Api/Currencies';
import { requestedCurrencies } from '../redux/actions/index';
import Load from './Loading';
import OptionCategory from './OptionCategory';
import OptionCoin from './OptionCoins';
import OptionPayment from './OptionPayment';

class WalletForm extends Component {
  state = ({
    loading: true,
  });

  async componentDidMount() {
    const { dispatch } = this.props;
    const teste = await requestCurrencies();
    this.setState({
      loading: false,
    });
    dispatch(requestedCurrencies(teste));
  }

  render() {
    const { loading } = this.state;
    const { Moedas } = this.props;
    return (
      <div>
        { loading ? <Load /> : (
          <div className="FormularioWallet mb-3">
            <p>
              Adicione despesas ou entradas
            </p>
            <form>
              <label htmlFor="Valor" className="form-label">
                Valor:
                <input
                  type="text"
                  data-testid="value-input"
                  name="ValorDespesa"
                  className="form-control"
                />
              </label>
              <label htmlFor="Descrição" className="form-label">
                Descrição:
                <textarea
                  name="Descrição"
                  rows="1"
                  cols="20"
                  className="form-control"
                  data-testid="description-input"
                />
              </label>
              <OptionCoin Moedas={ Moedas } />
              <OptionPayment />
              <OptionCategory />
              <button type="submit" className="btn btn-primary">
                Adiciona Despesa
              </button>
            </form>
          </div>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Moedas: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
