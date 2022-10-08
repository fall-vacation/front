import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    html {
    font-size: 62.5%;
    }
    body {
    font-size: 1.6rem;
    }

    ul,
li {
  list-style: none;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

input {
  border: 0;
}
input:focus {
  outline: none;
}
a{
    color:black;
    text-decoration: none;
}
`;
