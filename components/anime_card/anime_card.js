import React from 'react'
import {CardArea,Card,TextArea ,Title,Img} from './style'
import Div from '../../patterns/div'


import DropdownData from './dropdown_data/dropdown_data'




export default function anime_card({data}) {
    return (
        <>
        <TextArea>
            <Title>Atenção!</Title>
            <p>Os animes possuem uma classificação para caracterizar a faixa etária do anime essa classificação é feita da seguinte forma: <b>G =</b> todos os gêneros/ <b>PG =</b> para crianças/ <b>PG-13 =</b> jovens de 13 anos ou mais velhos/ <b>R =</b> recomendado +17 anos (contém violência e profanidade)/ <b>R+ = </b> nudez suave (mas também contem violência e profanidade)/ <b>RX  =</b> Hentai (conteúdo sexual extremo / nudez).</p>
        </TextArea>
        
        <CardArea>
            {
                data.results.map(data => 
                    <Card key={Math.random()*10}>
                           
                        <Div>
                          <Img src={data.image_url} alt="anime image"></Img>
                        </Div>

                        <Div>
                        <DropdownData title="Nome do anime" data={data.title} bgColor="#f3f4f5"/>

                        <DropdownData title="Classificação" data={data.rated}/>

                        <DropdownData title="Sinopse" data={data.synopsis} bgColor="#f3f4f5"/>

                            <DropdownData title="Tipo de anime" data={data.type}/>

                            <DropdownData title="Url" data={<a href={data.url} target="_blank" rel="noreferrer">Ir para MyAnimeList</a>} bgColor="#f3f4f5"/>

                            <DropdownData title="Pontuação" data={data.score}/>
                        </Div>
                    </Card>
                )
            }
        </CardArea>
        </>
    )
}
