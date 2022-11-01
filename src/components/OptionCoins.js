import PropTypes from 'prop-types';
import React from 'react';

class OptionCoin extends React.Component {
  render() {
    const { Moedas } = this.props;
    return (
      <label htmlFor="Moeda" className="form-label">
        Moeda:
        <select
          data-testid="currency-input"
          name="Moeda"
          className="form-control"
        >
          { Moedas.map((name) => (
            <option
              key={ name }
              value={ name }
            >
              { name }
            </option>)) }
        </select>
      </label>
    );
  }
}

OptionCoin.propTypes = {
  Moeda: PropTypes.string,
}.isRequired;

export default OptionCoin;
