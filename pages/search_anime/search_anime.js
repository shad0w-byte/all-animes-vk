import React,{useEffect,useState} from 'react'
import styled from 'styled-components'

import Head from '../../components/head/head'
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banner'
import Footer from '../../components/footer/footer'

import Div from '../../patterns/div'
import FlexDiv from '../../patterns/flex-div'

import BannerImage from '../../assets/images/background-banner.jpg'

import AnimeCard from '../../components/anime_card/anime_card'

const FormArea = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:30px 0;

    h2{
        margin:20px 0;
    }

    form{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input{
        width:100%;
        border:none;
        margin:0px 10px;
        border-radius:15px;
        padding:5px 10px;
        border:2px solid #000;
    
        &::placeholder{
            color:#000;
        }

        &:focus{
            outline:none;
            border:2px solid #000;
        }
    }

    button{
        width:100%;
        background: transparent;
        border:2px solid #892CDC;
        color:#892CDC;
        padding:5px;
        margin:10px 0;
        font-weight: 600;
        border-radius:15px;
    }
`

export default function searchAnime() {

    const [anime,setAnime] = useState([])

    async function getData(){
        let title = document.querySelector(".anime_title ").value
        title === "" ? title = "Naruto" : title
        const apiUrl = `https://api.jikan.moe/v3/search/anime?q=${title}&order_by=${title}&sort=asc&limit=15`
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
    },[])

        
    return (
        <Div>
            <Head title="pesquisar anime"/>
            <header>
                <Div bgImage={BannerImage} width="100%">
                   <Navbar/>
                    <Banner mainText="Você está na sessão de pesquisa"/>
                </Div>
                
            </header>
            <main>
          
                <FormArea direction="column"
                justify="center" 
                align="center" margin="30px 0">
                    <h2>Informe o nome do anime</h2>
                    <form>
                        <input type="text" className="anime_title" placeholder="ex: Naruto"/>
                        <button type="button" onClick={getData}>Pesquisar</button>
                    </form>
                </FormArea>
                {
                  anime.map(data => <AnimeCard data={data} key={"key" +data.results}/>)
                }
            </main>
            <Footer/>
        </Div>
    )
}
