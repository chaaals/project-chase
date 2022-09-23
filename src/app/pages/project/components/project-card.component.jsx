import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
  padding: 1.5rem;

  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  cursor: pointer;
  animation: fadein 1s linear forwards;
  transition: 300ms ease-in-out;

  &:hover {
    background-color: rgba(238, 238, 238);
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

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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

const CardDate = styled.p`
  font-family: "Oxygen Bold";
  font-size: 0.85rem;

  color: var(--primary-color);
`;

export const formatDate = (date) => new Date(date).toISOString().substring(0, 10);

const ProjectCard = ({
  id,
  project_name,
  project_description,
  date_created,
  onClick = null,
}) => {
  return (
    <CardContainer
      className="project-card"
      onClick={onClick}
      data-projectid={id}
    >
      <CardContent>
        <CardHeading>{project_name}</CardHeading>
        {date_created && (
          <CardDate>Date created: {formatDate(date_created)}</CardDate>
        )}
        <CardSubheading title={project_description}>
          {project_description}
        </CardSubheading>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard;
