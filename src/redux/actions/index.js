// Coloque aqui suas actions
export const ADD_EMAIL = 'ADD_EMAIL';
export const REQUESTED_CURRENCIES = 'REQUESTED_CURRENCIES';

export const addEmail = (type, payload) => ({
  type,
  payload,
});

export const requestedCurrencies = (payload) => ({
  type: REQUESTED_CURRENCIES,
  payload,
});
