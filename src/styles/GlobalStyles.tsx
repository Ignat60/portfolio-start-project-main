import { createGlobalStyle } from "styled-components";
// import { theme } from "./Theme";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }

    body {
  margin: 0;
  font-family:'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.color.font}; 
  line-height:1.2;

  min-width: 360px;
}

a {
    text-decoration: none;    
    color: ${theme.color.font};
    cursor: pointer;
}
ul {
    list-style:none;
}
button {
    background-color: unset;
    border: unset;
    cursor: pointer;
    color: ${theme.color.font}
}


Main {
    background-color: ${theme.color.secondaryBg};
}
 
section {
    padding: 100px 0 ;

    @media ${theme.media.mobile} {
        padding: 80px 0;
    }
} 

section:nth-of-type(odd) {
    background-color: ${theme.color.primaryBg};
}

section:nth-of-type(even) {
    background-color: ${theme.color.secondaryBg};
}

p {
    font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
}

h3 {
    font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
 
}
`;
