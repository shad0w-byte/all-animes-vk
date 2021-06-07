import styled from 'styled-components'

//estilo feito através das classes do bootstrap

const NavbarStyle = styled.nav`

  nav.navbar{
    padding:5px;
    background-color:transparent;
    backdrop-filter:blur(2px);
}

nav.navbar a.nav-link, a.nav-link.active{
    background:transparent;
    color:#FFF;
    font-weight:bold;
    letter-spacing:1px;
    font-size:1.1em;
    margin:5px;
    cursor:pointer;

    &:hover, &:active, &:focus{
        color:#F3f4f5;
        font-weight:bold;
        letter-spacing:1.5px;
        transition:.3s linear;
    }
}

//para evitar erros de alguns links ficarem pretos

.navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .show>.nav-link {
    color:#F3F4F5;
}

div.dropdown-menu{
    background-color:rgba(82, 5, 123,.4);
    border:none;
    text-align:center;
}

a.dropdown-item{
    background:transparent;
    color:#FFF;
    letter-spacing:1px;
    font-weight:bold;

    &:focus, &:hover, &:active{
        color:#FFF;
    }
}


// para estilizar o botão da versão mobile

.navbar-light .navbar-toggler {
    color:transparent;
    border-color:transparent;
}

// para editar a navbar e ajustar para a versão mobile

div.navbar-nav a.nav-link{
    margin:0px 5px;
    padding:5px;
    @media(max-width:768px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center; 
    }
    

}
`
//para estilizar o icone do botão da navbar mobile
const BarStyle = styled.i`
    color:#FFF;
    font-size:1.65em;
`
//logo do site
const Logo = styled.span`
    font-size:1.3em;
    font-weight:600;
    color:#FFF;
    padding:0px 10px;
`

export {NavbarStyle,BarStyle,Logo}