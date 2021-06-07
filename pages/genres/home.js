import React from 'react'
import Head from '../../components/head/head'
import styled from 'styled-components'

import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banner'
import Footer from '../../components/footer/footer'

import GenrerAnimes from './dropdown_data/dropdown_data'

import Div from '../../patterns/div'
import GridDiv from '../../patterns/grid-div'
import Img from '../../patterns/img'

import BannerImage from '../../assets/images/background-banner.jpg'
import Noragami from '../../assets/images/noragami.png'
import Pensando1 from '../../assets/images/pensando1.png'


const GridArea = styled.div`
    display:grid;
    grid-template-columns:20% 80%;
    grid-template-rows:auto;
    height:auto;

    @media(max-width:576px){
        grid-template-columns: 100%;
    }
`






export default function anime_page() {
    return (
        <Div>
            <Head title="gêneros de anime"/>
            <header>
                <Div bgImage={BannerImage}>
                    <Navbar/>
                    <Banner mainText="Você está na sessão de gêneros" secondaryText="Veja a lista completa dos gêneros de animes disponíveis"/>
                </Div>
            </header>
            
            <main>
                <GridArea>
                   <aside>
                        <GenrerAnimes title="Gêneros de anime"/>
                   </aside>
                        <Div>
                            <GridDiv  margin="50px 10px" padding="10px" column="column">
                            <Div>
                                <h2>Uma variedades de gêneros te espera</h2>
                                <p>Não sabe qual gênero escolher? Temos uma variedade de mais de 30 gêneros para você escolher desde ação, terror, esportes até gêneros como yaoi, yuri, shounen entre outros. Basta deslizar a lista para ver todos os gêneros disponíveis.</p>
                            </Div>
                            <Div>
                                <Img src={Pensando1}alt="anime image"/>
                            </Div>
                        </GridDiv>
                        <GridDiv  margin="50px 0px 0px 0px" padding="10px 0px 10px" bgColor="#f3f4f5">
                         <Div>
                            <Img src={Noragami} alt="anime image"/>
                        </Div>
                        <Div margin="10px" padding="10px">
                           <h2>Muitos animes te esperam!</h2>
                           <p>Aqui você encontra dados de mais de 20 mil  animes contendo vários dados interessantes como o tipo do anime, pontuação, classificação dentre outros dados importantes sobre o anime.</p>
                        </Div>
                    </GridDiv>
                </Div>
            </GridArea>
            </main>
            <Footer/>
        </Div>
    )
}
