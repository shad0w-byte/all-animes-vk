import React from 'react'
import {Banner,TextArea,MainText,SecondaryText} from './style'



export default function banner(props) {
    return (
        <Banner bgImage={props.bgImage}>
           <TextArea>
           <MainText>{props.mainText}</MainText>
            <SecondaryText>{props.secondaryText}</SecondaryText>
           </TextArea>
        </Banner>
    )
}

