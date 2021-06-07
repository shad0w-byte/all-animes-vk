import styled from 'styled-components'


const Footer = styled.footer`
    height:auto;
    width:100%;
    display:block;
    background-color:#0e1013;
    color:#fff;

    // título do footer
    h3{
        font-weight:600;
        color:#BC6FF1;
    }

    // footer para diferentes dispositivos
    @media(max-width:576px){
        position:relative;
        bottom:0;
        left:0;
    }
    @media(width:768px){
        position:fixed;
        bottom:0;
        left:0;
    }
    @media(width:1024px){
        position:fixed;
        bottom:0;
        left:0;
    }

   // spam que fica lá embaixo do footer
    span{
        font-size:1.08em;
    }

    //link do footer
    a{
        text-decoration:none;
        font-size:1.2em;
        color:#BC6FF1;
        padding:5px 0;
    }

    // coração que fica no footer

    i.bi-heart-fill{
        color:#e53935;
        vertical-align:middle;
    }
`



export {Footer}