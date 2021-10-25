import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0; 
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
`;

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 0;
  max-width: 1300px;
`;

export default GlobalStyles;
