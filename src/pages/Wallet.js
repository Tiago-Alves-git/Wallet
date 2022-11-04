import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import EditForm from '../components/EditForm';
import HeaderWallet from '../components/Header Wallet';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import '../Style/Wallet.css';

class Wallet extends React.Component {
  render() {
    const { isToEdit, editor } = this.props;
    return (
      <>
        <HeaderWallet />
        <WalletForm />
        <Table />
        { editor && <EditForm isToEdit={ isToEdit } /> }
      </>
    );
  }
}

Wallet.propTypes = {
  editor: PropTypes.any,
  isToEdit: PropTypes.any,
}.isRequired;
const mapStateToProps = (state) => ({
  isToEdit: state.wallet.isToEdit,
  editor: state.wallet.editor,
});

export default connect(mapStateToProps)(Wallet);
