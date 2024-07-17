import "./styles/globals.css";
import { Web3Modal } from "@web3modal/react";
import { chains, providers} from "@web3modal/ethereum";

const modalConfig = {
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'Web3Modal Test',
    chains: [chains.goerli, chains.polygonMumbai],
    providers: [
      providers.walletConnectProvider({
        projectId: "01c78e6cbde6d376a807faab7af50643",
      })
    ],
    autoConnect: true,

  },
  projectId: "01c78e6cbde6d376a807faab7af50643"
}

const MyApp = ({Component, pageProps}) => {
  return (
  <>
    <Component {...pageProps} />
    <Web3Modal config={modalConfig} />

  </>
  );
}

export default MyApp;