import Web3 from "web3";
import { InjectedConnector } from "@web3-react/injected-connector";

const BINANCE_TESTNET_NETWORK_ID = 97;

export const connector = new InjectedConnector({
    supportedChainIds: [BINANCE_TESTNET_NETWORK_ID]
});

export const getLibrary = (provider) => {
    const library = new Web3(provider);
    return library;
};
