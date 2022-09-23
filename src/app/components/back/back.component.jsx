import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 1rem;
  color: var(--secondary-color);

  border: none;
  background: transparent;

  text-decoration: underline;
  cursor: pointer;
`;

const Back = ({ onClick }) => {
  return (
    <BackButton onClick={onClick}>
      <FontAwesomeIcon icon={faAnglesLeft} />
      Projects
    </BackButton>
  );
};

export default Back;
