import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  padding: 1.5rem;

  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  cursor: pointer;
  animation: fadein 1s linear forwards;
  transition: 300ms ease-in-out;

  &:hover {
    background-color: var(--neutral-color2);
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const CardHeading = styled.h1`
  font-family: "Oxygen Regular";
  color: var(--primary-color);
`;

const CardSubheading = styled.p`
  font-family: "Oxygen Regular";
  color: var(--secondary-color);

  width: 450px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProjectCard = ({ project_name, project_description, onClick = null }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardHeading>{project_name}</CardHeading>
      <CardSubheading>{project_description}</CardSubheading>
    </CardContainer>
  );
};

export default ProjectCard;
