import styled from 'styled-components'

const DropdownDataStyle = styled.div`
    div.card{
        background-color:${props => props.bgColor ||"#FFF"};
        border-radius:0;
        color:#000;
        width:100%;
        border:none;
        text-align:left;
    }
    div.card-header{
        padding:10px;
        background:transparent;
        text-align:center;
    }
    button.btn-link{
        width:100%;
        text-align:left;
        color:#892CDC;
        font-weight:600;
        border-bottom:1px solid 0007;
        text-decoration:none;
        font-size:1.2em;
        text-align:left;
        &:hover{
            text-decoration:none;
        }
        &:focus{
            box-shadow:none;
            text-decoration:none;
            box-shadow:none;
            outline:none;
        }
    }
`
export{
    DropdownDataStyle
}