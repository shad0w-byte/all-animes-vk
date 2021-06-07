import React from 'react'
import Link from 'next/link'
import {Accordion,Card,Button} from 'react-bootstrap'
import DropdownDataStyle from './style'


export default function dropdownData({title,bgColor}) {
    return (
        
        <DropdownDataStyle bgColor={bgColor}>
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            {title}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                            <Link href="/genres/action">
                                <a>ação</a>
                            </Link>
                            <Link href="/genres/adventure">
                                <a>aventura</a>
                            </Link>
                            <Link href="/genres/martialArts">
                                <a>artes marciais</a>
                            </Link>
                            <Link href="/genres/cars">
                                <a>carros</a>
                            </Link>
                            <Link href="/genres/comedy">
                                <a>comédia</a>
                            </Link>
                            <Link href="/genres/kids">
                                <a>Crianças</a>
                            </Link>
                            <Link href="/genres/drama">
                                <a>Drama</a>
                            </Link>
                            <Link href="/genres/dementia">
                                <a>Dementia</a>
                            </Link>
                            <Link href="/genres/demons">
                                <a>Demônios</a>
                            </Link>
                            <Link href="/genres/ecchi">
                                <a>Ecchi</a>
                            </Link>
                            <Link href="/genres/school">
                                <a>Escola</a>
                            </Link>
                            <Link href="/genres/sports">
                                <a>Esportes</a>
                            </Link>
                            <Link href="/genres/space">
                                <a>Espaço</a>
                            </Link>
                            <Link href="/genres/fantasy">
                                <a>Fantasia</a>
                            </Link>
                            <Link href="/genres/sliceOfLife">
                                <a>Fatia de vida</a>
                            </Link>
                            <Link href="/genres/harem">
                                <a>Harem</a>
                            </Link>
                            <Link href="/genres/hentai">
                                <a>Hentai</a>
                            </Link>
                            <Link href="/genres/historical">
                                <a>Histórico</a>
                            </Link>
                            <Link href="/genres/game">
                                <a>Jogo</a>
                            </Link>
                            <Link href="/genres/josei">
                                <a>Josei</a>
                            </Link>
                            <Link href="/genres/magic">
                                <a>Magia</a>
                            </Link>
                            <Link href="/genres/mecha">
                                <a>Mecha</a>
                            </Link>
                            <Link href="/genres/military">
                                <a>Militar</a>
                            </Link>
                            <Link href="/genres/military">
                                <a>Música</a>
                            </Link>
                            <Link href="/genres/parody">
                                <a>Paródia</a>
                            </Link>
                            <Link href="/genres/police">
                                <a>Polícia</a>
                            </Link>
                            <Link href="/genres/psychological">
                                <a>Psicológico</a>
                            </Link>
                            <Link href="/genres/romance">
                                <a>Romance</a>
                            </Link>
                            <Link href="/genres/samurai">
                                <a>Samurai</a>
                            </Link>
                            <Link href="/genres/sciFi">
                                <a>Sci fi</a>
                            </Link>
                            <Link href="/genres/seinen">
                                <a>Seinen</a>
                            </Link>
                            <Link href="/genres/supernatural">
                                <a>Sobrenatural</a>
                            </Link>
                            <Link href="/genres/superPower">
                                <a>Super Poder</a>
                            </Link>
                            <Link href="/genres/thriller">
                                <a>Suspense</a>
                            </Link>
                            <Link href="/genres/shoujo">
                                <a>Shoujo</a>
                            </Link>
                              <Link href="/genres/shoujoAi">
                                <a>Shoujo Ai</a>
                            </Link>
                              <Link href="/genres/shounen">
                                <a>Shounen</a>
                            </Link>
                              <Link href="/genres/horror">
                                <a>Terror</a>
                            </Link>
                            <Link href="/genres/vampire">
                                <a>Vampiros</a>
                            </Link>
                            <Link href="/genres/yaoi">
                                <a>Yaoi</a>
                            </Link>
                            <Link href="/genres/yuri">
                                <a>Yuri</a>
                            </Link>
                    </Card.Body>
                </Accordion.Collapse>
             </Card>
        </Accordion>
        </DropdownDataStyle>
    )
}