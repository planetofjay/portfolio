import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../components/data/motion";
import { ContainerSlideIn } from "../pages/Projects";

import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";

const Info = styled(motion.div)`
  width: 12rem;
  color: #c3c3c3;
  margin: 1.6rem;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 99;
  overflow: hidden;
`;

const Social = styled.img`
  background-color: black;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 1.6rem;
`;

const Contact = () => {
  return (
    <>
      <Info
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <ContainerSlideIn
          variants={fadeIn("left", "tween", 0.3, 1)}
        >
          <p>Next Step.</p>
          <h1>Get In
            <a
              href="mailto: jae44dv@gmail.com"
              style={{ color: "white", paddingLeft: "14px" }}
            >Touch
            </a>
          </h1>
          <Center>
            <a
              href="https://github.com/planetofjay"
              target="blank"
            >
              <Social src={Github} alt="Jay's Github" />
            </a>
            <a
              href="https://www.linkedin.com/in/planetofjay/"
              target="blank"
            >
              <Social src={Linkedin} alt="Jay's Linkedin" />
            </a>
          </Center>
        </ContainerSlideIn>
      </Info>
    </>
  );
};

export default Contact;