import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
    background: #ffffff;
    box-shadow: 0 2px 2px rgba(0,0,0,0.1), 0 4px 4px rgba(0,0,0,0.1);
`

export const LinkNav = styled(Link)`
    text-decoration: none;
    color: #000000;
    margin-right: 3rem;
    font-weight: bold;
`
export const Nav = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1300px;
    display:flex;
    justify-content: space-between;
    align-items:center;
`

export const ImgLogo = styled.img`
    margin-left: 1rem;
`
export const ContainerLinks = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width:70%;
    height:100%;

`
