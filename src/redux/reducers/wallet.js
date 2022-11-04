// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { DELETE_EXPENSES, EDIT_EXPENSES, REQUESTED_CURRENCIES,
  SAVE_EDITED_EXPENSES,
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
    return {
      ...state,
      currencies: action.payload,
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      totalValue: action.resultado,
    };
  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: action.novoExpense,
      totalValue: action.novoResultado,
    };
  case EDIT_EXPENSES:
    return {
      ...state,
      isToEdit: action.payload,
      editor: true,
    };
  case SAVE_EDITED_EXPENSES:
  { const teste = action.payload.map((number) => {
    const novoValorConvertido = (Number(number.value)
          * Number(number.exchangeRates[number.currency].ask));
    return novoValorConvertido;
  });
  const novoResultado = teste.reduce(
    (prevValue, value) => prevValue + value,
    0,
  );
  return {
    ...state,
    editor: false,
    isToEdit: 0,
    expenses: action.payload,
    totalValue: novoResultado,
  };
  }
  default:
    return state;
  }
};

export default wallet;
