import { useEffect, useState } from "react";
import { Contract, providers } from "ethers";

import React from 'react'

const App = () => {

  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  
  // keep track of connected accounts(current)
  const [account, setAccount] = useState(null);

  useEffect(() => {

    if (window.ethereum) {
      setIsWalletInstalled(true);

    }

  }, []);
  
  const connectWallet = async () => {
    window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts) {
          setAccount(account[0]);
        })
        .catch((error) => {
          alert("Something went wrong");
        });
  }
  return (
    <div>App</div>
  )
}

export default App