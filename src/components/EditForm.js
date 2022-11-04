import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExpenses, saveExpenses } from '../redux/actions';
import '../Style/EditForm.css';
import OptionCategory from './OptionCategory';
import OptionCoin from './OptionCoins';
import OptionPayment from './OptionPayment';

class EditForm extends Component {
  state = ({
    ValorDespesa: '',
    Descrição: '',
    Moeda: '',
    Payment: '',
    Tag: '',
    ids: '',
    exchangeRates: '',
  });

  componentDidMount() {
    const { isToEdit } = this.props;
    this.setState({
      ValorDespesa: isToEdit[0].value,
      Descrição: isToEdit[0].description,
      Moeda: isToEdit[0].currency,
      Payment: isToEdit[0].method,
      Tag: isToEdit[0].tag,
      ids: isToEdit[0].id,
      exchangeRates: isToEdit[0].exchangeRates,
    });
  }

  handleSave = async (e) => {
    const { dispatch } = this.props;
    e.preventDefault();
    const { ValorDespesa, Descrição, Moeda, Payment, Tag, ids,
      exchangeRates } = this.state;
    const teste = {
      id: ids,
      value: ValorDespesa,
      description: Descrição,
      currency: Moeda,
      method: Payment,
      tag: Tag,
      exchangeRates,
    };
    await dispatch(deleteExpenses(teste.id));
    await dispatch(saveExpenses(teste));
  };

  handleForm = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { ValorDespesa, Descrição, Moeda, Payment, Tag } = this.state;
    const { Moedas } = this.props;
    return (
      <div className="editForm">
        <div className="editForm-Inner Wallet mb-3">
          <p>
            Edite a sua entrada/despesa!
          </p>
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
              className="editForm-Button"
              type="button"
              onClick={ this.handleSave }
            >
              Editar despesa
            </button>
          </form>
        </div>
      </div>
    );
  }
}

EditForm.propTypes = {
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  isToEdit: state.wallet.isToEdit,
  editor: state.wallet.editor,
  Moedas: state.wallet.currencies,
});

export default connect(mapStateToProps)(EditForm);
