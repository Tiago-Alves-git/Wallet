import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveEditedExpenses } from '../redux/actions';
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
    const { State, isToEdit } = this.props;
    const despesaASerEditada = State.filter((states) => Number(states.id)
     === Number(isToEdit));
    this.setState({
      ValorDespesa: despesaASerEditada[0].value,
      Descrição: despesaASerEditada[0].description,
      Moeda: despesaASerEditada[0].currency,
      Payment: despesaASerEditada[0].method,
      Tag: despesaASerEditada[0].tag,
      ids: despesaASerEditada[0].id,
      exchangeRates: despesaASerEditada[0].exchangeRates,
    });
  }

  handleSave = async (e) => {
    e.preventDefault();
    const { State, isToEdit, dispatch } = this.props;
    const { ValorDespesa, Descrição, Moeda, Payment, Tag, ids,
      exchangeRates } = this.state;
    const teste = State.map((element) => {
      if (Number(element.id) === Number(isToEdit)) {
        // const { value, id, description, currency,
        //   method, tag } = element;
        return {
        //   value: ValorDespesa,
          id: ids,
          value: ValorDespesa,
          description: Descrição,
          currency: Moeda,
          method: Payment,
          tag: Tag,
          exchangeRates,
        };
      }

      return element;
    });
    console.log(teste);
    dispatch(saveEditedExpenses(teste));
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
  State: state.wallet.expenses,
});

export default connect(mapStateToProps)(EditForm);
