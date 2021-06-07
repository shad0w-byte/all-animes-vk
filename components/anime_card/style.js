import styled from 'styled-components'

const TextArea = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:20px 0;

ul{
    width:auto;
}

p{
    text-align:center;
    padding:10px;
    margin:5px;
    font-size:1.1em;
}

@media(max-width:576px){
    p{
        text-align:center;
    }
    ul{
        margin:10px;
        padding:0;
    }
}
`

const CardArea = styled.main`
    margin:10px 0;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:baseline;
    @media(max-width:576px){
        width:100%;
        padding:10px;
}
`
    const Card = styled.div`
    display:flex;
    flex-direction:column;
    grid-template-columns:1fr 50%;
    width:400px;
    border:1px solid #f3f4f5;
    margin:30px 10px;
    border-radius:15px;
    @media(max-width:576px){
        display:flex;
        flex-direction:column;
        width:100%;
        margin: 4% 8px;
    }

    a{
        color:#52057B;
        text-decoration:none;
        font-weight:600;
    }
`


const Title = styled.h2`
    font-size:1.8em;
    color:#000;
`
const Img = styled.img`
    width:100%;
    height:400px;
    border-top-left-radius:15px;
    border-top-right-radius:15px;

    @media(max-width:576px){
        width:100%;
    }
`

export{
    TextArea,
    CardArea,
    Card,
    Title,
    Img
}