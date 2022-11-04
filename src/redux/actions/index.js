// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const REQUESTED_CURRENCIES = 'REQUESTED_CURRENCIES';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const DELETE_EXPENSES = 'DELETE_EXPENSES';
export const EDIT_EXPENSES = 'EDIT_EXPENSES';
export const SAVE_EDITED_EXPENSES = 'SAVE_EDITED_EXPENSES';

export const addEmail = (type, payload) => ({
  type,
  payload,
});

export const requestedCurrencies = (payload) => ({
  type: REQUESTED_CURRENCIES,
  payload,
});

export const saveExpenses = (payload) => ({
  type: SAVE_EXPENSES,
  payload,
});

export const deleteExpenses = (payload) => ({
  type: DELETE_EXPENSES,
  payload,
});

export const editExpenses = (payload) => ({
  type: EDIT_EXPENSES,
  payload,
});

export const saveEditedExpenses = (payload) => ({
  type: SAVE_EDITED_EXPENSES,
  payload,
});
