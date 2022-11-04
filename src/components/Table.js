import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { deleteExpenses, editExpenses } from '../redux/actions';

class Table extends Component {
  handleDelete = (event) => {
    const { Expenses, StateValue } = this.props;
    const antigoExpense = Expenses.filter((states) => Number(states.id)
      === Number(event.target.name));
    const novoExpense = Expenses.filter((states) => Number(states.id)
        !== Number(event.target.name));
    const ValorConvertido = (Number(antigoExpense[0].value)
          * Number(antigoExpense[0].exchangeRates[antigoExpense[0].currency].ask));
    const novoResultado = StateValue - ValorConvertido.toFixed(2);
    const { dispatch } = this.props;
    dispatch(deleteExpenses(novoExpense, novoResultado));
  };

  handleEdit = (event) => {
    const { dispatch } = this.props;
    dispatch(editExpenses(event.target.name));
  };

  render() {
    const { Expenses } = this.props;
    return (
      <div>
        <table className="table table-light table-hover table-bordered border-dark">
          <thead>
            <tr>
              <th>
                Descrição;
              </th>
              <th>
                Tag;
              </th>
              <th>
                Método de pagamento;
              </th>
              <th>
                Valor;
              </th>
              <th>
                Moeda;
              </th>
              <th>
                Câmbio utilizado;
              </th>
              <th>
                Valor convertido;
              </th>
              <th>
                Moeda de conversão;
              </th>
              <th>
                Editar/Excluir.
              </th>
            </tr>
          </thead>
          <tbody>
            { Expenses.map((expenses) => (
              <tr key={ expenses.id }>
                <td>
                  {' '}
                  { expenses.description }
                  {' '}
                </td>
                <td>
                  { expenses.tag }
                </td>
                <td>
                  { expenses.method }
                </td>
                <td>
                  { Number(expenses.value).toFixed(2) }
                </td>
                <td>
                  { expenses.exchangeRates[expenses.currency].name }
                </td>
                <td>
                  { Number(expenses.exchangeRates[expenses.currency].ask).toFixed(2) }
                </td>
                <td>
                  { Number(expenses.value)
                  * Number(expenses.exchangeRates[expenses.currency].ask) }
                </td>
                <td>
                  Real
                </td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ this.handleDelete }
                    name={ expenses.id }
                  >
                    {' '}
                    <AiFillDelete pointerEvents="none" />
                    {' '}
                  </button>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    name={ expenses.id }
                    onClick={ this.handleEdit }
                  >
                    <AiFillEdit pointerEvents="none" />
                  </button>
                </td>
              </tr>
            )) }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  Expenses: PropTypes.any,
}.isRequired;

const mapStateToProps = (state) => ({
  Expenses: state.wallet.expenses,
  StateValue: state.wallet.totalValue,
});

export default connect(mapStateToProps)(Table);
