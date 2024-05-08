import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../data/motion";
import { ContainerSlideIn } from "../../pages/Projects";

const AboutDiv = styled(motion.div)`
  max-width: 24rem;
  height: auto;
  color: #c3c3c3;
  position: absolute;
  padding: 1.6rem;
  bottom: 0;
  right: 0;  
  font-family: "Inconsolata", monospace;
  overflow: hidden;

  p {
      padding-bottom: 1rem;
    }
`

const About = () => {
  return (
    <AboutDiv
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <ContainerSlideIn
        variants={fadeIn("left", "tween", 1.4, 1)}
      >
        <div>
          <p>
            {/** Introduction */}
          </p>
        </div>
      </ContainerSlideIn>
    </AboutDiv>
  )
};

export default About;