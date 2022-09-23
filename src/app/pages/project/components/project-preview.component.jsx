import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faListCheck,
  faClockRotateLeft,
  faCircleCheck,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import Back from "../../../components/back/back.component";
import ShowMessage from "../../../components/message/message.component";
import Task from "./task.component";

import { formatDate } from "./project-card.component";

const ProjectPreviewContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 100vh;

  padding: 2rem 0rem;
  margin: 10px auto;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }
`;

const ProjectPrev = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProjectPrevContent = styled.div``;

const ProjectPrevMidContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectTextContainer = styled.div`
  width: 60%;
`;

const ProjectPrevHeading = styled.h1`
  display: flex;
  align-items: center;

  font-size: 2rem;
  font-family: "Oxygen Bold";

  color: var(--secondary-color);
`;

const ProjectPrevSubHeading = styled.h4`
  font-size: 1rem;
  font-family: "Oxygen Regular";

  color: var(--secondary-color);
`;

const ProjectPrevText = styled.p`
  font-family: Oxygen Regular;
  font-size: 1rem;
  color: var(--primary-color);
`;

const CreateTask = styled.button`
  display: flex;
  align-items: center;

  font-family: Oxygen Light;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 1em 1.35em;

  background-color: transparent;
  color: var(--primary-color);

  border: 1px solid var(--primary-color);
  border-radius: 10px;

  gap: 4px;
  cursor: pointer;

  transition: 300ms ease-in-out;
  &:hover {
    color: var(--neutral-color2);
    background-color: var(--primary-color);
  }
`;

const ProjectPreview = ({ project, tasks, createTask, goToProjects }) => {
  const [content] = project;
  console.log(content);
  return (
    <ProjectPreviewContainer>
      <ProjectPrev>
        <ProjectPrevContent>
          <Back onClick={goToProjects} />
        </ProjectPrevContent>
        <ProjectPrevContent>
          <ProjectPrevHeading>{content.project_name}</ProjectPrevHeading>
          <ProjectPrevText>
            {content.date_created &&
              `Created on ${formatDate(content.date_created)}`}
          </ProjectPrevText>
        </ProjectPrevContent>

        <ProjectPrevMidContent>
          <ProjectTextContainer>
            <ProjectPrevSubHeading>Description</ProjectPrevSubHeading>
            <ProjectPrevText>{content.project_description}</ProjectPrevText>
          </ProjectTextContainer>
          <CreateTask onClick={createTask} align="center">
            <FontAwesomeIcon icon={faPenToSquare} />
            Create new task
          </CreateTask>
        </ProjectPrevMidContent>

        <ProjectPrevContent>
          <TasksHeaderComponent />
          {tasks.length !== 0 ? (
            <TasksContainerComponent tasks={tasks} />
          ) : (
            <ShowMessage />
          )}
        </ProjectPrevContent>
      </ProjectPrev>
    </ProjectPreviewContainer>
  );
};

const TasksHeaderContainer = styled.section`
  display: grid;
  justify-items: start;
  grid-template-columns: repeat(4, 1fr);

  padding-bottom: 0.85rem;
  border-bottom: 1px solid rgba(44, 51, 51, 0.5);

  margin-top: 10px;
`;

const TaskHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  font-family: "Oxygen Regular";
  font-size: 0.8rem;
  color: var(--primary-color);

  padding: 0.5em 1.25em;
  border-radius: 25px;
  ${({ headerType }) => {
    switch (headerType) {
      case "todos":
        return "background-color: var(--todos);";
      case "in-progress":
        return "background-color: var(--in-progress);";
      case "reviewing":
        return "background-color: var(--reviewing);";
      case "finished":
        return "background-color: var(--finished);";
      default:
        return "";
    }
  }}
`;

const TasksHeaderComponent = () => {
  return (
    <TasksHeaderContainer>
      <TaskHeader headerType="todos">
        <FontAwesomeIcon icon={faList} />
        Todos
      </TaskHeader>

      <TaskHeader headerType="in-progress">
        <FontAwesomeIcon icon={faListCheck} />
        In progress
      </TaskHeader>

      <TaskHeader headerType="reviewing">
        <FontAwesomeIcon icon={faClockRotateLeft} />
        Reviewing
      </TaskHeader>

      <TaskHeader headerType="finished">
        <FontAwesomeIcon icon={faCircleCheck} />
        Finished
      </TaskHeader>
    </TasksHeaderContainer>
  );
};

const TasksContainer = styled.section`
  display: grid;
  justify-items: start;
  grid-template-columns: repeat(4, 1fr);

  margin: 20px auto;
`;

const TaskContainer = styled.div`
  /* parent styles */
  ${({ taskType }) => {
    switch (taskType) {
      case "todos":
        return "grid-column: 1;";
      case "in-progress":
        return "grid-column: 2;";
      case "reviewing":
        return "grid-column: 3;";
      case "finished":
        return "grid-column: 4;";
      default:
        return "";
    }
  }}

  /* component styles */
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const TasksContainerComponent = ({ tasks }) => {
  return (
    <TasksContainer>
      <TaskContainer taskType="todos">
        {tasks.length !== 0 &&
          tasks
            .filter(({ tags }) => tags === "todos")
            .map((task) => <Task {...task} />)}
      </TaskContainer>
      <TaskContainer taskType="in-progress">
        {tasks.length !== 0 &&
          tasks
            .filter(({ tags }) => tags === "in-progress")
            .map((task) => <Task {...task} />)}
      </TaskContainer>
      <TaskContainer taskType="reviewing">
        {tasks.length !== 0 &&
          tasks
            .filter(({ tags }) => tags === "reviewing")
            .map((task) => <Task {...task} />)}
      </TaskContainer>
      <TaskContainer taskType="finished">
        {tasks.length !== 0 &&
          tasks
            .filter(({ tags }) => tags === "finished")
            .map((task) => <Task {...task} />)}
      </TaskContainer>
    </TasksContainer>
  );
};

export default ProjectPreview;
