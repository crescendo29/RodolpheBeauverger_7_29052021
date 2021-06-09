import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
}

body{
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #0d99d7;
    background: #fcddd8;
    color: black;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #23d997;
        color: white;
    }
}
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 1.2rem;
       
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: light;
        color:#ccc;
    }
    p{
        padding: 1rem 0rem;
        color: #282828;
        font-size: 1.2rem;
        line-height: 150%;
    }

`;

export default GlobalStyle;
