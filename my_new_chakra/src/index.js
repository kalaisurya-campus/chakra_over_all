import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light"></ColorModeScript>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
