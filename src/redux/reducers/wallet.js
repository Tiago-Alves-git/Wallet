// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { DELETE_EXPENSES, EDIT_EXPENSES, REQUESTED_CURRENCIES,
  SAVE_EXPENSES } from '../actions';

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
    editor: false,
  }; }
  case DELETE_EXPENSES:
  {
    const antigoExpense = state.expenses.filter((states) => Number(states.id)
    === Number(action.payload));
    const novoExpense = state.expenses.filter((states) => Number(states.id)
      !== Number(action.payload));
    const ValorConvertido = (Number(antigoExpense[0].value)
        * Number(antigoExpense[0].exchangeRates[antigoExpense[0].currency].ask));
    const novoResultado = state.totalValue.toFixed(2) - ValorConvertido.toFixed(2);
    return {
      ...state,
      expenses: novoExpense,
      totalValue: novoResultado,
    };
  }
  case EDIT_EXPENSES:
  {
    const despesaASerEditada = state.expenses.filter((states) => Number(states.id)
      === Number(action.payload));
    return {
      ...state,
      isToEdit: despesaASerEditada,
      editor: true,
    };
  }
  default:
    return state;
  }
};

export default wallet;
