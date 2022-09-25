import React from "react";
import styled from "styled-components";

import ChaseIcon from "../../../assets/icon.asset";

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  background-color: var(--primary-color);
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  width: 90vw;
  padding: 2rem;
`;

const FooterText = styled.p`
  font-family: "Oxygen Regular";
  font-size: 0.85rem;

  color: var(--neutral-color2);

  span {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <ChaseIcon />
        <FooterText>
          Developed and designed by <span>Charles Ching</span>
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
