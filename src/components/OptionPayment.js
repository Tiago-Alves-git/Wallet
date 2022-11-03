import PropTypes from 'prop-types';
import React from 'react';

class OptionPayment extends React.Component {
  render() {
    const { handleForm, defaultValue } = this.props;
    return (
      <label htmlFor="Payment" className="form-label">
        Forma de pagamento:
        <select
          data-testid="method-input"
          name="Payment"
          className="form-control"
          onChange={ handleForm }
          value={ defaultValue }
        >
          <option value="Dinheiro">
            Dinheiro
          </option>
          <option value="Cartão de crédito">
            Cartão de crédito
          </option>
          <option value="Cartão de débito">
            Cartão de débito
          </option>
        </select>
      </label>
    );
  }
}

OptionPayment.propTypes = {
  handleForm: PropTypes.func,
}.isRequired;

export default OptionPayment;
