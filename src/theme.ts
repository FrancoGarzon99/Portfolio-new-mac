import {extendTheme} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

import background from "./assets/background.jpg";

const breakpoints = createBreakpoints({
  xs: "400px",
  sm: "576px",
  md: "768px",
  lg: "1000px",
  xl: "1400px",
  xxl: "1560px",
});

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
        fontSize : {
          xs : "14px",
          xxl :"16px"
        }
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
  breakpoints
});
