import React from "react";
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import ReactDOM from "react-dom";

import {UiContextProvider} from "./context/DataContext";
import theme from "./theme";
import App from "./App";
// import {TranslationContext} from "./context/TranslationContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UiContextProvider>
        {/* <TranslationContext> */}
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
        {/* </TranslationContext> */}
      </UiContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
