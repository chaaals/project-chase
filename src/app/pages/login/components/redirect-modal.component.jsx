import React from "react";
import styled from "styled-components";

const RedirectComponentContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 450px;
  padding: 2rem;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  gap: 12px;
  border-radius: 12px;
`;

const RedirectText = styled.h1`
  font-family: "Oxygen Regular";
  font-weight: 700;
  font-size: 1.75rem;

  color: var(--primary-color);
`;

const RedirectButton = styled.button`
  font-family: "Oxygen Light";
  font-size: 1.25rem;

  background-color: transparent;
  color: var(--secondary-color);

  text-decoration: underline;
  border: none;
  cursor: pointer;
`;

const RedirectModal = ({ onRedirect = null }) => {
  return (
    <RedirectComponentContainer>
      <RedirectText>You're already logged in</RedirectText>
      <RedirectButton onClick={onRedirect}>
        Click here to go to your dashboard
      </RedirectButton>
    </RedirectComponentContainer>
  );
};

export default RedirectModal;
