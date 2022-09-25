import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/fontawesome-free-brands";

import WaveAsset from "../../../../assets/wave.asset";

const HomeComponentContainer = styled.section`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 90vh;

  position: relative;
  overflow: hidden;
`;

const Home = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 80%;
  margin-top: 150px;

  position: relative;
  animation: fadein 1.5s linear forwards;

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const HomeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const HomeText = styled.p`
  ${({ textType }) => {
    switch (textType) {
      case "heading":
        return `font-family: 'Oxygen Bold'; font-size: 2.5rem; color: var(--primary-color);`;
      case "normal":
        return `font-family: 'Oxygen Regular'; font-size: 1.25rem; color: var(--secondary-color); width: 730px;`;
      default:
        return "";
    }
  }}
`;

const HomeLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const HomeLink = styled.a`
  &:link {
    color: var(--primary-color);
  }

  &:visited {
    color: var(--primary-color);
  }

  &:hover {
    color: var(--secondary-color);
    transform: translateY(-10px);
  }

  font-size: 1.75rem;
  transition: 300ms ease-in-out;
  text-decoration: none;

  z-index: 9999;
`;

const WaveContainer = styled.div`
  svg {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;

    z-index: 0;
  }
`;

const HomeComponent = () => {
  return (
    <HomeComponentContainer>
      <Home>
        <HomeTextContainer>
          <HomeText textType="heading">Welcome to Chase</HomeText>
          <HomeText textType="normal">
            Chase is a project/sprint management app that was inspired by
            Notion's Kanban.
          </HomeText>
          <HomeText textType="normal">
            <strong>Register/Log in</strong> your account to get started!
          </HomeText>
        </HomeTextContainer>
        <HomeLinks>
          <HomeLink
            href="https://github.com/chaaals/project-chase"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </HomeLink>
          <HomeLink
            href="https://www.linkedin.com/in/chaalschng/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </HomeLink>
        </HomeLinks>
      </Home>

      <WaveContainer>
        <WaveAsset />
      </WaveContainer>
    </HomeComponentContainer>
  );
};

export default HomeComponent;
