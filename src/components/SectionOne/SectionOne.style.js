import styled from 'styled-components'
import { Container } from '../../GlobalStyles/GlobalStyle'

export const ContainerSection1 = styled(Container)`
    background: rgb(238, 241, 242);
    height: 400px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
`
export const SectionOneImg = styled.img`
    width: 300px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
`
export const SectionOneInfo = styled.div`
   width: 500px;
   height: 70%;
`
