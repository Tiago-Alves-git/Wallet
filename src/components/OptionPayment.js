import React from 'react';

class OptionPayment extends React.Component {
  render() {
    return (
      <label htmlFor="Payment" className="form-label">
        Forma de pagamento:
        <select
          data-testid="method-input"
          name="Payment"
          className="form-control"
        >
          <option value="Dinheiro">
            Dinheiro
          </option>
          <option value="CartãoCrédito">
            Cartão de crédito
          </option>
          <option value="CartãoDébito">
            Cartão de débito
          </option>
        </select>
      </label>
    );
  }
}

export default OptionPayment;
