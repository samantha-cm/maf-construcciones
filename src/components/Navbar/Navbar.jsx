import { Link } from 'react-router-dom'
import { NavbarContainer, Nav, ImgLogo, ContainerLinks, LinkNav } from './Navbar.style'
import logo from '../../assets/logo-light.png'

const Navbar = () => {
    return (
        <NavbarContainer>
            <Nav>
                <Link to='/'><ImgLogo src={logo} alt="maf" /></Link>
                <ContainerLinks>
                <LinkNav to='/'>Home</LinkNav>
                <LinkNav to='/about'>About</LinkNav>
                <LinkNav to='/projects'>Projects</LinkNav>
                <LinkNav to='/contactUs'>Contact Us</LinkNav>
            
                </ContainerLinks>
                </Nav>
        </NavbarContainer>
    )
}

export default Navbar
