
// import home2 from '../img/home2.png';
import soft from '../img/skillsw.jpeg';
// Import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg'
import styled from 'styled-components'
//styles
import { About, Description, Image } from '../styles'
import { scrollReveal } from "../animation";
import { useScroll } from './useScroll'

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <Description>
                <h2>
                    Meine <span>Soft</span> Skills.
                </h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="icon clock" />
                            <h3>KREATIVITÄT</h3>
                        </div>
                        <p>Kreativität ist als Soft Skill die Fähigkeit, gute und möglichst neuartige Lösungen für Probleme zu entwickeln.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="icon teamwork" />
                            <h3>TEAM PLAYER</h3>
                        </div>
                        <p>Expertentum nutzt gar nichts, wenn es nicht mit den Kollegen geteilt  und diese nicht von mir profitieren können und andersherum.

</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="icon diaphragm" />
                            <h3>KOMMUNIKATION</h3>
                        </div>
                        <p>Kommunikationsfähigkeit ist nicht nur, meine Ideen besonders verständlich zu formulieren, sondern auch, dass ich anderen aufmerksam zuhöre und verstehe. </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="icon money" />
                            <h3>FLEXIBILITÄT</h3>
                        </div>
                        <p>Flexibilität bedingt, dass ich auch mal unvorhergesehene Änderungen umsetze und nicht in starren Mustern denke.</p>
                    </Card>
                </Cards>

            </Description>
            <Image>
                <img src={soft} alt=" camera" />
            </Image>
        </Services>
    );
}


const Services = styled(About)`
h2{
    padding-bottom: 5rem;
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}

`;


const Cards = styled.div`

display: flex;
flex-wrap: wrap;
@media (max-width: 1300px){
       justify-content:center;
    }
`;

const Card = styled.div`
flex-basis: 20rem;
.icon{
    display: flex;
    align-items: center;
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
    

}
`
export default ServicesSection;