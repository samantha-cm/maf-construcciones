import { ContainerSection1, SectionOneImg, SectionOneInfo } from './SectionOne.style'
import { Link } from 'react-router-dom'

const SectionOne = () => {
    return (
        <ContainerSection1>
            <SectionOneImg src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg' alt='familia'/>
            <SectionOneInfo>
                <h2>Nuestra historia</h2>
                <p>
                Somos una empresa familiar construyendo de familia a familia
                La experiencia y pasión por la construcción de 3 generaciones avalan nuestro compromiso con la calidad de lo que le ofrecemos, lo cual nos distingue de nuestros competidores al planificar y pensar como una familia, como personas hacia personas.
                </p>
                <Link to='/about'>Sobre Nosotros</Link>
            </SectionOneInfo>
        </ContainerSection1>
    )
}

export default SectionOne
