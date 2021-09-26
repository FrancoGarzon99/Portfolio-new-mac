import {extendTheme} from "@chakra-ui/react";

import background from "./assets/background.jpg";

export default extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        color: "white",
        height: "100%",
        overflow: "hidden",
        fontFamily: "Poppins",
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
      },
      body: {
        backgroundColor: `#EF1678`,
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      },
    },
  },
  colors: {
    colorPrimary: "#2D3748",
  },
  fonts: {
    fontPrimary: "Poppins",
    fontSecondary: "Roboto",
  },
});
