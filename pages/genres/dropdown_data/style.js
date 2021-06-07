import styled from 'styled-components'

const DropdownDataStyle = styled.div`
    div.card{
        background-color:${props => props.bgColor ||"#FFF"};
        border-radius:0;
        color:#000;
        width:100%;
        border:none;
        border-right: 1px solid #0005;
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
        color:#000;
        letter-spacing:1px;
        font-weight:600;
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
    a{
        color:#000;
        display:block;
        font-weight:600;
        padding:5px 0;
        text-decoration:none;
    }
    span{
        font-weight:600;
        margin:10px 0;
    }
    div.card-body{
        height:100vh;
        overflow-y:auto;
        
        @media(max-width:576px){
            height:100px;
            &::-webkit-scrollbar{
            background:transparent;
        }
        }
    }


`
export default DropdownDataStyle