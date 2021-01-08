import React, { useState } from 'react';
import styled from 'styled-components'
import { motion } from "framer-motion";
import plus from '../img/plus.svg';
import minus from '../img/minus.svg'



const Toggle = ({ children, title }) => {
    const [toggle, setToggle] = useState(false)
    return (
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
            <motion.h4 layout>{title} {toggle ? <StyledImg src={minus} alt="" /> : <StyledImg src={plus} alt="" />}</motion.h4>
            {toggle ? children : ''}
            <div className="faq-line"></div>

        </motion.div>
    );
}

const StyledImg = styled.img`
margin-left: .5rem;
transition: all .5s ease;
width: 1.2%;
@media (max-width: 800px){
       
    width: 3%;
       
      
    }
    @media (max-width: 520px){
       
       width: 4%;
          
         
       }

`;

export default Toggle;