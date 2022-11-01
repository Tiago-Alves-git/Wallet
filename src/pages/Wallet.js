import React from 'react';
import HeaderWallet from '../components/Header Wallet';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <HeaderWallet />
        <WalletForm />
      </>
    );
  }
}

export default Wallet;
