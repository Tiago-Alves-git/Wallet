import React from 'react';
import HeaderWallet from '../components/Header Wallet';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';
import '../Style/Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <HeaderWallet />
        <WalletForm />
        <Table />
      </>
    );
  }
}

export default Wallet;
