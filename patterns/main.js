import React from 'react'
import styled from 'styled-components'

//componente reutilizável estilizado atráves de props

const Main = styled.main`
    position:${props => props.position || "relative"};
    margin:${props => props.margin || "0"};
    padding:${props => props.padding || "0"};
    width:${props => props.width || "auto"};
    height:${props => props.height || "auto"};
`

export default function main(props) {
    return (
        <Main
        position={props.position}
        margin={props.margin}
        padding={props.padding}
        width={props.width}
        height={props.height}>
           {props.children} 
        </Main>
    )
}
