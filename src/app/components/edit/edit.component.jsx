import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const EditButton = styled.button`
  position: relative;
  font-size: 1.2rem;
  color: var(--primary-color);

  background-color: #fff;
  border: none;

  cursor: pointer;
  transition: 300ms ease-in-out;

  &:hover {
    color: var(--secondary-color);
  }

  &:focus,
  &:focus-within {
    div {
      display: flex;
      opacity: 1;
      z-index: 998;
    }
  }

  div {
    display: none;
  }

  position: absolute;
  top: 35px;
  right: 35px;
`;

const EditOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  gap: 8px;
  width: 150px;
  background-color: #fff;

  border-radius: 12px;
  padding: 1rem;
  z-index: 9999;

  opacity: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: 300ms ease-in-out;

  position: absolute;
  top: 25px;
  right: 0;
`;

const EditOption = styled.button`
  /* parent styles */
  align-self: flex-start;

  /* component styles */
  display: flex;
  align-items: center;
  gap: 4px;

  font-family: "Oxygen Bold";
  font-size: 0.75rem;

  background: transparent;
  border: none;

  cursor: pointer;
  width: 100%;
  ${({ buttonType }) => {
    switch (buttonType) {
      case "edit":
        return `color: var(--primary-color);`;
      case "delete":
        return `color: red;`;
      default:
        return "";
    }
  }}

  &:hover {
    text-decoration: underline;
  }
`;

const EditComponent = ({ onEdit = null, onDelete = null }) => {
  return (
    <EditButton>
      <FontAwesomeIcon icon={faEllipsisVertical} />
      <EditOptions>
        <EditOption buttonType="edit" onClick={onEdit}>
          <FontAwesomeIcon icon={faPen} />
          Edit Project
        </EditOption>
        <EditOption buttonType="delete" onClick={onDelete}>
          <FontAwesomeIcon icon={faTrash} />
          Delete Project
        </EditOption>
      </EditOptions>
    </EditButton>
  );
};

export default EditComponent;
