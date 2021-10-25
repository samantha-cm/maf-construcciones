import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BackInfoProjects = styled.div`
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23e1e1e1' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

export const SubTitle = styled.h3`
    margin-top: 3rem;
    font-size: 2.5rem;
    font-weight: bold;
`

export const ContainerCardProjects = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
`
export const CardProjects = styled.div`
    width: 320px;
    height: 220px;
    margin: 2rem 2rem 1rem;
    background-image: url('https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg');
    object-position: center center;
    background-size: cover;
    padding: .5rem;
`

export const CardProjectsTitle = styled.h4`
    font-size: 1.2rem;
    color: #ffffff;
`
export const CardProjectsInfo = styled.p`
    color: #ffffff;
    
`
export const CardProjectsLink = styled(Link)`
    text-decoration: none;
    color: #ffffff;
`
// export const ImgProject = styled.img`
//     width: 100%;
//     /* position: relative;
//     z-index: -999;
//     top: -100%; */

// `