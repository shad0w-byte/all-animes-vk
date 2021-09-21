import React,{useEffect,useState} from 'react'
import Head from '../../components/head/head'

import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banner'
import Footer from '../../components/footer/footer'

import Div from '../../patterns/div'
import FlexDiv from '../../patterns/flex-div'
import BannerImage from '../../assets/images/background-banner.jpg'

import AnimeCard from '../../components/anime_card/anime_card'

import Button from '../../components/button/button'



export default function music() {

    const [anime,setAnime] = useState([])
    const [actualPage,setActualPage] = useState(1)

    const apiUrl = `https://api.jikan.moe/v3/search/anime?q=&page=${actualPage}&genre=19/`

    async function getData(){
       try{
            const response = await fetch(apiUrl)
            const data = await response.json()
            setAnime([data])
       }catch(error){
           console.error(error)
       }
    }
    useEffect(()=>{
        getData()
        window.scrollTo(0,0)
    },[actualPage])

        
    return (
        <Div>
            <Head title="animes de música"/>
            <header>
                <Div bgImage={BannerImage} width="100%">
                   <Navbar/>
                    <Banner mainText="Você está na sessão animes de música"/>
                </Div>
            </header>
            <main>
                {anime.map(data => <AnimeCard data={data} key={"key" +data.results}/>)}
                <FlexDiv direction="column" justify="center" align="center">
                    <Button type="button" onClick={() => setActualPage(actualPage + 1)} 
                    >proxima pagina</Button>
                    <p>Você está na página: {actualPage}</p>
                </FlexDiv>
            </main>
            <Footer/>
        </Div>
    )
}
