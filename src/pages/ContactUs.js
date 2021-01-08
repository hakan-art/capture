
//Animation
import { motion } from "framer-motion"
import { pageAnimation, titleAnim } from "../animation"
import styled from 'styled-components';

const ContactUs = () => {
    return (

        <ContactStyle exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{ background: '#fff' }}>
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <a href="https://api.whatsapp.com/send?phone=+491713591908" target="__blank"><h2>Send Me A Message (Whatsapp)</h2></a>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <a href="mailto:h.gezer@arcor.de" target="__blank"><h2>Email Me</h2></a>

                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle />
                        <a href="https://www.linkedin.com/in/hakan-gezer/" target="__blank"><h2>LinkedIn</h2></a>

                    </Social>
                </Hide>
            </div>
        </ContactStyle>

    );
};

const ContactStyle = styled(motion.div)`
padding: 5rem 10rem;
color: #353535;
min-height: 90vh;
@media (max-width: 1500px){
    
    padding: 2rem;

    }
`;
const Title = styled.div`
margin-bottom: 4rem;
color: black;
@media (max-width: 1500px){
    
    margin-top: 5rem;

    }
`;
const Hide = styled.div`
overflow: hidden;
`;

const Circle = styled.div`
border-radius: 50%;
width: 3rem;
height: 3rem;
background:#353535;

`;

const Social = styled(motion.div)`
display: flex;
align-items: center;
h2{
    margin: 2rem;
}
a{
    text-decoration: none;
    color:#353535;
}
@media (max-width: 800px){

    h2{

        font-size:1rem;
    }
    }
   

`;


export default ContactUs;