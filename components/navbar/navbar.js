import React from 'react'

import {Navbar,Nav} from 'react-bootstrap'


import {NavbarStyle,BarStyle, Logo} from './style'



export default function navbar() {
    return (
        <>
        <NavbarStyle>
            <Navbar expand="lg">
            <Logo>All animes vk</Logo>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="button">
              <BarStyle>
                <i className="bi bi-list"></i>
              </BarStyle>
          </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
                <Nav.Link href="/"  rel="noreferrer">Home</Nav.Link>

                <Nav.Link href="/genres/home" rel="noreferrer" >Gêneros</Nav.Link>

                <Nav.Link href="/search_anime/search_anime" rel="noreferrer" >Pesquisar anime</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </NavbarStyle>
    </>
    )
}
