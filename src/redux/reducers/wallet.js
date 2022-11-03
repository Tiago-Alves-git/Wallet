// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUESTED_CURRENCIES, SAVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
  totalValue: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUESTED_CURRENCIES:
  { const chaves = Object.keys(action.payload);
    const chavesFiltered = chaves.filter((keys) => keys !== 'USDT');
    return {
      ...state,
      currencies: chavesFiltered,
    }; }
  case SAVE_EXPENSES:
  { const ValorConvertido = (action.payload.value
    * action.payload.exchangeRates[action.payload.currency].ask);
  const resultado = Number(state.totalValue) + Number(ValorConvertido);
  return {
    ...state,
    expenses: [...state.expenses, action.payload],
    totalValue: resultado,
  }; }
  default:
    return state;
  }
};

export default wallet;
