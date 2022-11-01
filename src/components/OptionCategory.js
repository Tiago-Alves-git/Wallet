import React from 'react';

class OptionCategory extends React.Component {
  render() {
    return (
      <label htmlFor="Payment" className="form-label">
        tag:
        <select
          data-testid="tag-input"
          name="Tag"
          className="form-control"
          // className="dropdown-menu"
        >
          <option value="Alimentação" className="dropdown-item">
            Alimentação
          </option>
          <option value="Lazer" className="dropdown-item">
            Lazer
          </option>
          <option value="Trabalho" className="dropdown-item">
            Trabalho
          </option>
          <option value="Transporte" className="dropdown-item">
            Transporte
          </option>
          <option value="Saúde" className="dropdown-item">
            Saúde
          </option>
        </select>
      </label>
    );
  }
}

export default OptionCategory;
