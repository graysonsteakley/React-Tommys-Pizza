import {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`



*,
*::before,
*::after{

    box-sizing: inherit;
    font-size: 62.5%;
    margin: 0;
    padding: 0;

    @media only screen and (max-width: 760px) {

        font-size: 56.5%;

    }

    @media only screen and (max-width: 600px) {

        font-size: 52.25%;

    }

}

a:visited,
a:link{
    text-decoration: none;
    
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

        font-weight: 400;
        line-height: 1.6;
        min-height: 100vh;
        font-size: inherit;
        min-height: 100vh;
        /* font-family: 'Holtwood One SC', serif;
        font-family: 'Lobster', cursive;
         */
        font-family: 'Roboto', sans-serif!important;
    
    }

html{
    box-sizing: border-box;
    scroll-behavior: smooth;
}

code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }



div{
    text-align: center;
}

.heading{
    font-family: 'Holtwood One SC', serif !important;
}

.italic{
    font-family: 'Lobster', cursive !important;
}

.thin{
    font-family: 'Noto Sans', sans-serif;
    letter-spacing: 1.5;
    font-weight: 200;
}

`;





export default GlobalStyle;