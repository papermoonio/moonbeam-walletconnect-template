import './App.css';
import logo from "./logo.png";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { ethers } from "ethers";
import { SUPPORTED_NETWORKS } from "./helpers/networks";

const Wrapper = styled.div`
  font-family: "Varela Round", sans-serif;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10em;
`;

const Header = styled.h1`
  font-size: 2em;
  margin-bottom: 1em;
`;

const LoadedData = styled.div`
  margin: 1em;
  align-self: center;
`;

const Data = styled.p`
  font-size: 1.2em;
`;

const Button = styled.button`
  padding: 1em;
  background: #53cbc9;
  font-size: 1em;
  border: none;
  border-radius: 0.3em;
  font-family: "Varela Round", sans-serif;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const OutlinedButton = styled(Button)`
  background: #ffffff;
  border: 1px solid #53cbc9;
  display: flex;
  margin: auto;
  margin-top: 3em;
`;

function App() {
  // add state variables & hooks here
  const [connector, setConnector] = useState(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    // add logic with side effects
    if (connector) {
      connector.on("connect", async (error, payload) => {
        if (error) {
          console.error(error);
          return;
        }

        const { chainId, accounts } = payload.params[0];
        await onConnect(chainId, accounts[0]);
        setFetching(false);
      });

      connector.on("disconnect", async (error, payload) => {
        if (error) {
          console.error(error);
        }

        // handle disconnect event
      });

      // check state variables here & if needed refresh the app
    }

    const onConnect = async (chainId, connectedAccount) => {
      // handle connect event
    };

    const refreshData = async () => {
      const { chainId, accounts } = connector;
      await onConnect(chainId, accounts[0]);
      setFetching(false);
    }
  }, [connector]);

  const connect = async () => {
    setFetching(true);

    // add connection logic
  };

  const killSession = () => {
    // add logic to ensure the mobile wallet connection has been killed
  };

  const sendTransaction = async () => {
    // add send transaction logic
  };

  const resetApp = () => {
    // reset state variables here
  };

  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <Content>
        <Header>
          Moonbeam WalletConnect Demo App
        </Header>

        {/* buttons and network details will go here */}

      </Content>
    </Wrapper>
  );
}

export default App;
