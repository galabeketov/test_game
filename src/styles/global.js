import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  body {
      background-color: ${colors.mainBgColor};
      min-height: 100vh;
  }

  ul{
      list-style-type: none
      margin: 0;
      padding: 0;
  }
`;

export default GlobalStyle;
