import styled from 'styled-components';
import {Link} from 'react-router-dom';

const NavStyled = styled.ul`
    font-family:'SoberanaSans';
    font-size:17px;
    list-style:none;
    margin-top:20px;
    text-align:center;
`
const StyledLink = styled(Link)`
    color: ${(props)=> props.active ? 'blue' : 'black'}  !important;
`
const NavItemStyled = styled.li`
    display:inline;
    position:relative;
    a {
        color:#333;
        display:inline-block;
        padding:10px;
        text-decoration:none;
    }
    a:hover {
        color:#0088CC;
    }
    a:hover ~span{
        animation:ul 0.3s ease-out;
        background:#333;
    }
`
const Border = styled.span`
    background:#0088CC;
    bottom:-10px;
    display:block;
    height:4px;
    left:10px;
    position:absolute;
    width:calc(100% - 23px);
`
export {NavStyled, NavItemStyled, Border, StyledLink}