import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faX } from "@fortawesome/free-solid-svg-icons";

const EditTaskModal = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(238, 238, 238, 0.8);

  position: absolute;
  top: 0;
  left: 0;

  z-index: 9999;
`;

const EditTaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 420px;
  padding: 2rem;
  gap: 8px;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  border-radius: 12px;
  margin-top: 100px;
  position: relative;

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

const EditTask = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 90%;
`;

const EditTaskContent = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  svg {
    color: var(--primary-color);
    position: absolute;
    bottom: 12px;
    right: 12px;
  }
`;

const EditTaskLabel = styled.label`
  font-family: "Oxygen Bold";
  font-size: 0.85rem;
`;

const EditTaskInput = styled.input`
  font-size: 2.5rem;
  width: 100%;

  border: none;
  &:focus {
    outline: none;
  }

  ${({ normal }) => (normal ? "font-size: 0.85rem; margin-top: 8px;" : "")}
`;

const EditTaskDropdown = styled.select`
  font-size: 0.85rem;
  width: 100%;

  cursor: pointer;
  border: none;
  outline: none;

  border-radius: 4px;
  padding: 0.85em;

  appearance: none;
  margin-top: 10px;
  ${({ tag }) => {
    switch (tag) {
      case "todos":
        return `background-color: var(--${tag});`;
      case "in-progress":
        return `background-color: var(--${tag});`;
      case "reviewing":
        return `background-color: var(--${tag});`;
      case "finished":
        return `background-color: var(--${tag});`;
      default:
        return "";
    }
  }}
`;

const EditTaskOption = styled.option`
  font-size: 0.85rem;
  background-color: #fff;

  cursor: pointer;
`;

const EditTaskSubmit = styled.button`
  font-size: 1rem;
  padding: 0.85em;

  border-radius: 12px;
  border: 1px solid var(--primary-color);

  background-color: var(--primary-color);
  color: var(--neutral-color2);

  cursor: pointer;
  transition: 300ms ease-in-out;
  &:hover {
    color: var(--primary-color);
    background-color: transparent;
    border: 1px solid var(--primary-color);
  }
`;

const TaskDelete = styled(EditTaskSubmit)`
  width: 90%;
  background-color: red;
  border: 1px solid red;

  &:hover {
    color: red;
    background-color: transparent;
    border: 1px solid red;
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

const EditTaskComponent = ({
  task,
  onChange,
  onTaskEdit,
  onTaskDelete,
  onExit,
}) => {
  return (
    <EditTaskModal>
      <EditTaskContainer>
        <ExitModal onClick={onExit}>
          <FontAwesomeIcon icon={faX} />
        </ExitModal>
        <EditTask onSubmit={onTaskEdit}>
          <EditTaskContent>
            <EditTaskInput
              name="task_name"
              id="task"
              type="text"
              placeholder="Untitled..."
              value={task.task_name}
              onChange={onChange}
            />
          </EditTaskContent>

          <EditTaskContent>
            <EditTaskLabel for="task_note">
              <strong>Note</strong>
            </EditTaskLabel>
            <EditTaskInput
              name="task_note"
              id="task_note"
              type="text"
              placeholder="Any notes for this task?"
              normal={true}
              value={task.task_note}
              onChange={onChange}
            />
          </EditTaskContent>

          <EditTaskContent>
            <EditTaskLabel for="tags">Task Category</EditTaskLabel>
            <EditTaskDropdown
              name="tags"
              id="tags"
              tag={task.tags}
              onChange={onChange}
            >
              <EditTaskOption value="todos" selected={task.tags === "todos"}>
                To-do
              </EditTaskOption>
              <EditTaskOption
                value="in-progress"
                selected={task.tags === "in-progress"}
              >
                In progress
              </EditTaskOption>
              <EditTaskOption
                value="reviewing"
                selected={task.tags === "reviewing"}
              >
                Reviewing
              </EditTaskOption>
              <EditTaskOption
                value="finished"
                selected={task.tags === "finished"}
              >
                Finished
              </EditTaskOption>
            </EditTaskDropdown>
            <FontAwesomeIcon icon={faCaretDown} />
          </EditTaskContent>

          <EditTaskContent>
            <EditTaskSubmit>Update Task</EditTaskSubmit>
          </EditTaskContent>
        </EditTask>

        <TaskDelete onClick={onTaskDelete}>Delete Task</TaskDelete>
      </EditTaskContainer>
    </EditTaskModal>
  );
};

export default EditTaskComponent;
