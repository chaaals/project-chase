import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import { useLoginHook } from "./login.hook";
import { ExitModal } from "./components/login-modal.component";

import LoginModal from "./components/login-modal.component";
import RedirectModal from "./components/redirect-modal.component";

const LoginPageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(235, 235, 235, 0.9);
  position: fixed;
  top: 0;
  left: 0;
`;
const Login = () => {
  const {
    user,
    userInfo,
    handleUserInput,
    submit,
    navigateToRegister,
    redirectToDashboard,
    exitModal,
  } = useLoginHook();

  return (
    <>
      {user?.id !== undefined ? (
        <LoginPageContainer>
          <RedirectModal onRedirect={redirectToDashboard} />
        </LoginPageContainer>
      ) : (
        <LoginPageContainer>
          <ExitModal onClick={exitModal}>
            <FontAwesomeIcon icon={faX} />
          </ExitModal>
          <LoginModal
            toRegister={navigateToRegister}
            userInfo={userInfo}
            handleInput={handleUserInput}
            submit={submit}
          />
        </LoginPageContainer>
      )}
    </>
  );
};

export default Login;
