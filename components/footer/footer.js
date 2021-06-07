import React from 'react'
import {Footer} from './style'
import FlexDiv from '../../patterns/flex-div'
import Section from '../../patterns/section'



export default function footer() {
    return (
        <Footer>
            <FlexDiv direction="row" justify="baseline" align="baseline">
            <Section 
              margin="10px 10px" width="50%">
                  <h3>Sobre</h3>
                  <p>O site "All Animes VK" é um projeto totalmente brasileiro voltado para a comunidade de animes brasileira, a ideia do site veio apartir da indecisão de qual anime se escolher para assistir.O compartilhamento do site ajuda muito no engajamento do site, se puder compartilhar ficarei muito grato.</p>
              </Section>
              <Section 
              margin="10px 10px" width="50%">
                  <h3>Criador</h3>
                  <p>Olá, me chamo Victor Kiss, sou estudante de desenvolvimento web, no momento estou focado no frontend e estou sempre tentando melhorar, espero que goste do site e da idéia =)</p>
                  <a href="https://links-victor-kiss.vercel.app"  target="_blank" rel="noreferrer">Clique aqui para ir para as minhas redes sociais!</a>
              </Section>
            </FlexDiv>
                <FlexDiv padding="10px" aling="center" justify="center" bgColor="#17181B">
                    <span>Desenvolvido com <i className="bi bi-heart-fill"></i> por Victor Kiss 
                    </span>
                </FlexDiv>
        </Footer>
    )
}

