import React from "react";
import styled from "styled-components";

const ShowMessageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin-top: 24px;

  animation: fadein 1ms linear forwards;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ShowMsg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  gap: 8px;
  width: 75%;
`;

const Message = styled.p`
  ${({ messageType }) => {
    switch (messageType) {
      case "bigger":
        return `font-family: 'Oxygen Regular'; font-size: 1.25rem; font-weight: 600; color: var(--primary-color);`;
      case "smaller":
        return `font-family: 'Oxygen Regular'; font-size: 1rem; color: var(--primary-color); text-decoration: underline;`;
      default:
        return "";
    }
  }}
`;

const ShowMessage = () => {
  return (
    <ShowMessageContainer>
      <ShowMsg>
        <Message messageType="bigger">
          Oops, your project doesn't have any tasks.
        </Message>
        <Message messageType="smaller">Start creating tasks now!</Message>
      </ShowMsg>
    </ShowMessageContainer>
  );
};

export default ShowMessage;
