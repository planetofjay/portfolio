import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../data/motion";
import { ContainerSlideIn } from "../../pages/Projects";

const AboutDiv = styled(motion.div)`
  max-width: 13rem;
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
        variants={fadeIn("left", "tween", 0.4, 1)}
      >
        <div>
          <p>
            Born in 1994 in Seoul, Korea. Based in Calgary, Canada.
          </p>
          <p>
            Skilled in JavaScript, Node.js, React.js, HTML/CSS, and SQL. Currently studying Python.
          </p>
          <p>
            I am passionate about creativity, problem-solving, and continuous learning.
          </p>
          <p>
            I am pursuing a minimalist lifestyle. I love design, art, and cinematography.
          </p>
          <p>
            I would like to create something amazing with you.
          </p>
        </div>
      </ContainerSlideIn>
    </AboutDiv>
  );
};

export default About;