import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react';
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./config/web3";

const colors = {
  redefine_green: {
    500: '#3ECF58',
    600: '#496961',
  },
  redefine_white: {
    500: '#EEF1EF',
  },
}

const theme = extendTheme({ colors })

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ChakraProvider theme={theme}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <App />
        </Web3ReactProvider>
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
