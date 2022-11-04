import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import requestCurrencies from '../Api/Currencies';
import { requestedCurrencies, saveExpenses } from '../redux/actions/index';
import Load from './Loading';
import OptionCategory from './OptionCategory';
import OptionCoin from './OptionCoins';
import OptionPayment from './OptionPayment';

class WalletForm extends Component {
  state = ({
    loading: true,
    ValorDespesa: '',
    Descrição: '',
    Moeda: 'USD',
    Payment: 'Dinheiro',
    Tag: 'Alimentação',
    ids: 0,
  });

  async componentDidMount() {
    const { dispatch } = this.props;
    const teste = await requestCurrencies();
    const chaves = Object.keys(teste);
    const chavesFiltered = chaves.filter((keys) => keys !== 'USDT');
    this.setState({
      loading: false,
    });
    dispatch(requestedCurrencies(chavesFiltered));
  }

  handleForm = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  saveForm = async (e) => {
    e.preventDefault();
    const requestingCurrencies = await requestCurrencies();
    const { ValorDespesa, Descrição, Moeda, Payment, Tag, ids } = this.state;
    const { dispatch, state } = this.props;
    const teste = {
      id: ids,
      value: ValorDespesa,
      description: Descrição,
      currency: Moeda,
      method: Payment,
      tag: Tag,
      exchangeRates: requestingCurrencies,
    };
    const ValorConvertido = (teste.value
      * teste.exchangeRates[teste.currency].ask);
    const resultado = Number(state) + Number(ValorConvertido);
    dispatch(saveExpenses(teste, resultado));
    this.setState({
      loading: false,
      ValorDespesa: '',
      Descrição: '',
      Moeda: 'USD',
      Payment: 'Dinheiro',
      Tag: 'Alimentação',
      ids: ids + 1,
    });
  };

  render() {
    const { loading, ValorDespesa, Descrição, Moeda, Payment, Tag } = this.state;
    const { Moedas, editor } = this.props;
    return (
      <div>
        { loading ? <Load /> : (
          <div className="Wallet mb-3">
            <p>
              Adicione despesas ou entradas
            </p>
            { !editor
            && (
              <form className="FormularioWallet">
                <label htmlFor="Valor" className="form-label">
                  Valor:
                  <input
                    type="text"
                    data-testid="value-input"
                    name="ValorDespesa"
                    className="form-control"
                    value={ ValorDespesa }
                    onChange={ this.handleForm }
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
                    value={ Descrição }
                    onChange={ this.handleForm }
                  />
                </label>
                <OptionCoin
                  Moedas={ Moedas }
                  handleForm={ this.handleForm }
                  defaultValue={ Moeda }
                />
                <OptionPayment
                  handleForm={ this.handleForm }
                  defaultValue={ Payment }
                />
                <OptionCategory
                  handleForm={ this.handleForm }
                  defaultValue={ Tag }
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={ this.saveForm }
                >
                  Adicionar Despesa
                </button>

              </form>
            )}
          </div>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Moedas: state.wallet.currencies,
  editor: state.wallet.editor,
  state: state.wallet.totalValue,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(WalletForm);
