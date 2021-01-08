// import home1 from '../img/home1.png';
import coding from '../img/coding.jpeg';
//Styled Components 
import styled from 'styled-components';
import { About, Description, Image, Hide } from '../styles'
//Framer Motion

import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from './Wave';

const AboutSection = () => {
    // const titleAnim = {
    //     hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 2 } }
    // }
    // const container = {
    //     hidden: { x: 100 }, show: { x: 0, transition: { duration: .75, ease: "easeOut" } }
    // }
    return (

        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Willkommen auf </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>meine <span>Web</span> Portfolio</motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2 variants={titleAnim}>Seite.</motion.h2>
                    </Hide>

                </motion.div>
                <motion.p variants={fade}>Ich bin Hakan Gezer und auf dieser Seite will ich mein Werdegang mit meinen schulischen und beruflichen Stationen aufzeigen und Zugang zu einigen meiner Projekte geben.</motion.p>

                <motion.button variants={fade}> <StyledA href="mailto:h.gezer@arcor.de" target="__blank">Contact Me</StyledA> </motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={coding} alt="guy with a camera" />

            </Image>
            <Wave />
        </About>
    );
};

// Styled Components
const StyledA = styled.a`
text-decoration: none;
color: white;
`;


export default AboutSection;