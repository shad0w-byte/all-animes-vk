import React from 'react'
import Button from './style'

export default function button(props) {
    return (
        <Button 
        type={props.type}
        onClick={props.onClick}>
           {props.children} 
        </Button>
    )
}
