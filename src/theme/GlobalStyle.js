import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:200,500,700&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        padding: 0;
        margin: 0;
        background-color: white;
    }
`;

export default GlobalStyle;
