import React from 'react'
import styled from  'styled-components'

//componente reutilizável estilizado atráves de props

const Img = styled.img`
    position:relative;
    width:${props => props.width || "auto"};
    height:${props => props.height || "300px"};
    padding:${props => props.padding || "0"};
    margin:${props => props.margin || "0"}; 
`

export default function img(props) {
    return (
        <Img
        width={props.width}
        height={props.height}
        margin={props.margin}
        padding={props.padding}
        border={props.border}
        src={props.src}
        alt={props.alt}>
      
        </Img>
    )
}
