import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faX } from "@fortawesome/free-solid-svg-icons";

import ChaseLogo from "../../../../assets/logo/chase.logo";

const CreateProjectModal = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.95);
  width: 100vw;
  height: 100vh;

  position: absolute;
  z-index: 9999;
`;

const CreateProjectContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 70%;
  margin-top: 20px;
  padding: 2rem 2.75rem;

  position: relative;
`;

const CreateProject = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const CreateForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  gap: 32px;
  margin-top: 40px;
`;

const CreateInput = styled.input`
  font-size: 1.25rem;
  background-color: transparent;

  border: none;
  border-bottom: 1px solid var(--primary-color);

  width: 75%;
  padding: 0.5rem 1rem;

  letter-spacing: 4px;
  &:focus {
    outline: none;
  }
`;

const CreateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 1.25rem;
  align-self: flex-end;

  border: none;
  color: var(--secondary-color);
  background-color: transparent;

  cursor: pointer;
  transition: 300ms ease-in-out;
  &:hover {
    color: var(--primary-color);
  }
`;

const CreateExit = styled.button`
  font-size: 1.25rem;
  color: var(--secondary-color);
  background-color: transparent;

  border: none;
  cursor: pointer;

  position: absolute;
  top: 20px;
  right: 20px;
`;

const CreateProjectComponent = ({
  projectInfo,
  handleInput,
  onProjectCreate,
  onExit = null,
}) => {
  return (
    <CreateProjectModal>
      <CreateProjectContainer>
        <CreateExit onClick={onExit}>
          <FontAwesomeIcon icon={faX} />
        </CreateExit>
        <CreateProject>
          <ChaseLogo align="flex-start" />
          <CreateForm onSubmit={onProjectCreate}>
            <CreateInput
              name="project_name"
              type="text"
              placeholder="Enter project name"
              value={projectInfo?.project_name}
              onChange={handleInput}
            />
            <CreateInput
              name="project_description"
              type="text"
              placeholder="Enter short description"
              value={projectInfo?.project_description}
              onChange={handleInput}
            />
            <CreateButton type="submit">
              Create project
              <FontAwesomeIcon icon={faArrowRight} />
            </CreateButton>
          </CreateForm>
        </CreateProject>
      </CreateProjectContainer>
    </CreateProjectModal>
  );
};

export default CreateProjectComponent;
