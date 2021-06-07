import React from 'react'

import styled from 'styled-components'

import Navbar from '../components/navbar/navbar'
import Banner from '../components/banner/banner'
import Footer from '../components/footer/footer'

import Div from '../patterns/div'
import GridDiv from '../patterns/grid-div'
import Img from '../patterns/img'

import BannerImage from '../assets/images/background-banner.jpg'
import Chihiro from '../assets/images/chihiro.png'
import Totoro from '../assets/images/totoro.png'
import Pensando from '../assets/images/pensando.png'

// botão que será usado apenas nesta página

const Button = styled.a`
    font-size:1.05em;
    text-decoration:none;
    margin:20px 0;
    padding:8px 20px;
    background-color:#892CDC;
    color:#FFF;
    font-weight:600;
    border-radius:15px;
    letter-spacing:1px;
    &:hover{
        color:#FFF;
    }
`

export default function contentHome() {
    return (
        <Div>
            <header>
                <Div bgImage={BannerImage}>
                    <Navbar/>
                    <Banner mainText="Bem vindo a All Animes VK" secondaryText="Aqui você encontra uma variedade de dados sobre animes para você assistir!"/>
                </Div>
            </header>
            
            <main>
                    <GridDiv margin="50px 10px" padding="10px" >
                            <Div>
                            <h2>Descubra seu próximo anime para assistir</h2>
                            <p>Você não precisa fazer uma viagem igual  a <b>Chihiro</b> para achar um novo anime para assistir, aqui existe uma variedades de dados sobre animes que farão você achar seu próximo anime para assistir ou maratonar. </p>
                            </Div>
                            <Img src={Chihiro} width="auto" margin="20px" alt="chihiro"/>
                    </GridDiv>

                    <GridDiv margin="50px 0px" padding="10px" bgColor="#f3f4f5" column="column">

                    <Img src={Totoro} width="auto" margin="20px" alt="totoro"/>
                    
                            <Div>
                            <h2>Seu novo amigo na descoberta de animes!</h2>
                            <p>Assim como <b>Totoro</b> esse site é o seu novo amigo! Para te ajudar sempre que precisar descobrir algo relacionado ao seu anime preferido ou na descoberta de novos animes.</p>

                            <p>O site foi feito com muito carinho e dedicação, agradeço muito pela sua visita e fique a vontade para usar o site!</p>
                            </Div>
                    </GridDiv>

                    <GridDiv margin="50px 10px" padding="10px">
                            <Div>
                            <h2>Importante</h2>
                            <p>O site possui um límite de solicitações de 30 solicitações por minuto, caso alguma funcionalidade não esteja funcionando basta esperar 1 minuto que voltará a funcionar.</p>
                            <p>Ajude divulgado o site, pois ajuda no engajamento e me motiva a continuar fazendo mais sites, além de ajudar o site a ter mais alcance e visibilidade na comunidade de animes brasileira.</p>

                            <p>Compartilhar o site também ajuda o site a ter mais relevância nas buscas do google o que é algo muito importante. </p>
                            </Div>
                            <Img src={Pensando} width="auto" margin="20px" alt="personagem de anime pensando"/>
                    </GridDiv>
            </main>
            <Footer/>
        </Div>
    )
}
