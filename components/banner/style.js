import styled from 'styled-components'
import BannerImage from '../../assets/images/background-banner.jpg'


// estilo do footer

const Banner = styled.div`
    background-image:url(${props => props.bgImage || ''});
    background-position:center;
    background-size:cover;
    height:400px;
    width:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

// área aonde os textos ficam

const TextArea = styled.div`
    display:block;
    padding:4% 2%;
`

//texto principal

const MainText = styled.h1`
  color:#fff;
  text-align:center;
  text-transform:uppercase;
  font-weight:bold;

  @media(max-width:576px){
      font-size:2.2em;
      width:auto;
      text-align:center;
  }
`

//texto secundário (subtítulo)

const SecondaryText = styled.h2`
  color:#F4F4F4;
  text-align:left;
  font-size:1.6em;
  width:500px;
  margin:10px 0;

  @media(max-width:576px){
      font-size:1.2em;
      width:auto;
      text-align:center;
  }
`

export {Banner,TextArea,MainText,SecondaryText}