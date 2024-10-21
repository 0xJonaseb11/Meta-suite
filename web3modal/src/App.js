import logo from './logo.svg';
import './App.css';
import Web3modal from "web3modal";
import {ethers} from "ethers";
import {CoinbaseWalletSDK} from "@coinbase/wallet-sdk";
import { useState } from 'react';


const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "Web3Modal demo",
      infuraId: {3: `${process.env.RPC_URL}`},
    }

  }

}

function App() {

  const [web3Provider, setWeb3Provider] = useState(null);


  const connectWallet = async () => {
    try {
      let web3Modal = new Web3modal({
        cachePrivider : false,
        providerOptions,

      });
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance);
      if (web3ModalProvider) {
        setWeb3Provider(web3ModalProvider);
      }
      // log provider
      console.log(web3ModalProvider);

    } catch(error) {
      console.error(error);
    }
  }
  return (
    <div className="App">
      <header className='app-header'>
        <h1>Web3Modal Connection</h1>
        {
          web3Provider == null ? (
            <button type="" onClick={connectWallet}>
              connect wallet 
            </button>
          ) : (
            // run it here
            <div>
               <p>connected!</p>
               <p>Address: {web3Provider.provider.selectedAddress}</p>
            </div>
           
          )
        }
      </header>
      <button type="" onClick={connectWallet}>
        connect wallet
      </button>
    
    </div>
  );
}

export default App;