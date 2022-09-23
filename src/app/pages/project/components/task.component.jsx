import React from "react";
import styled from "styled-components";

const TaskContainer = styled.div`
  --size: 200px;
  width: var(--size);
  height: var(--size);

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 1.5rem;
  border-radius: 8px;

  overflow: hidden;
  overflow-y: scroll;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: var(--primary-color);
  background-color: #fff;

  cursor: pointer;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ${({ tag }) => `border: 1px solid var(--${tag}); &:hover {
    background-color: var(--${tag})
  }`}

  transition: 300ms ease-in-out;

  animation: fadein 1s linear forwards;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const TaskText = styled.p`
  ${({ textType }) => {
    switch (textType) {
      case "name":
        return `font-family: 'Oxygen Bold'; font-size: 1rem; white-space: nowrap; overflow: hidden;text-overflow: ellipsis;`;
      case "heading":
        return `font-family: 'Oxygen Bold'; font-size: .85rem;`;
      case "note":
        return `font-family: 'Oxygen Light'; font-size: .85rem;`;
      default:
        return "";
    }
  }}
`;

const Task = ({ id, task_name, task_note, tags = "todos", onClick = null }) => {
  return (
    <TaskContainer tag={tags} data-taskid={id}>
      <TaskText textType="name" title={task_name}>
        {task_name}
      </TaskText>
      {task_note && (
        <>
          <TaskText textType="heading">Note:</TaskText>
          <TaskText textType="note">{task_note}</TaskText>
        </>
      )}
    </TaskContainer>
  );
};

export default Task;
