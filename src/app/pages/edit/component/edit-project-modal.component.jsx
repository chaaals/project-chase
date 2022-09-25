import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const EditProjectModalContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(238, 238, 238, 0.9);

  position: absolute;
  top: 0;
  left: 0;

  z-index: 9999;
`;

const EditProjectModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 400px;
  padding: 2rem;
  margin-top: 100px;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 12px;

  position: relative;

  h1 {
    font-family: "Oxygen Regular";
    font-size: 1.75rem;
  }

  animation: pop 150ms linear forwards;
  @keyframes pop {
    0% {
      scale: 0.8;
    }
    50% {
      scale: 1.1;
    }
    100% {
      scale: 1;
    }
  }
`;

const EditProjectForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 20px;
  width: 90%;
`;

const EditProjectLabel = styled.label`
  font-family: "Oxygen Bold";
  font-size: 1rem;
`;

const EditProjectInput = styled.input`
  font-family: "Oxygen Regular";
  font-size: 1rem;
  background-color: transparent;

  border: none;
  border-bottom: 1px solid var(--primary-color);

  width: 100%;
  padding: 0.5em 0.8em;

  &:focus {
    outline: none;
  }
`;

const EditProjectSubmit = styled.button`
  font-family: "Oxygen Regular";
  font-size: 1rem;
  padding: 0.5rem 0rem;

  border-radius: 12px;
  cursor: pointer;

  background-color: var(--primary-color);
  color: var(--neutral-color2);
  border: 1px solid var(--primary-color);

  transition: 300ms ease-in-out;
  &:hover {
    background-color: #fff;
    color: var(--primary-color);
  }
`;

const ExitModal = styled.button`
  font-size: 1rem;
  border: none;
  background: transparent;

  position: absolute;
  top: 15px;
  right: 15px;

  cursor: pointer;
`;

const EditProjectModalComponent = ({
  project = [{ project_name: "Test Project", project_description: "wowowowo" }],
  onSubmit,
  onChange,
  onExit,
}) => {
  console.log(project);
  return (
    <EditProjectModalContainer>
      <EditProjectModal>
        <ExitModal onClick={onExit}>
          <FontAwesomeIcon icon={faX} />
        </ExitModal>
        <h1>Edit Project</h1>
        <EditProjectForm onSubmit={onSubmit}>
          <EditProjectLabel>
            Name
            <EditProjectInput
              name="project_name"
              type="text"
              value={project.project_name}
              onChange={onChange}
            />
          </EditProjectLabel>
          <EditProjectLabel>
            Description
            <EditProjectInput
              name="project_description"
              type="text"
              value={project.project_description}
              onChange={onChange}
            />
          </EditProjectLabel>
          <EditProjectSubmit type="submit">Update Project</EditProjectSubmit>
        </EditProjectForm>
      </EditProjectModal>
    </EditProjectModalContainer>
  );
};

export default EditProjectModalComponent;
