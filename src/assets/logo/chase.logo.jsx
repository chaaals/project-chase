import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
  ${({ align }) => (align ? `align-self: ${align}` : "")}
`;

const Logo = styled.h1`
  font-size: 1.75rem;
  font-family: "Oxygen Regular";
  font-weight: 400;

  color: var(--primary-color);
  letter-spacing: 10px;
`;

const Colorize = styled.span`
  color: var(--secondary-color);
`;

const ChaseLogo = ({ align }) => {
  return (
    <LogoContainer align={align}>
      <Logo>
        cha<Colorize>se</Colorize>.
      </Logo>
    </LogoContainer>
  );
};

export default ChaseLogo;
